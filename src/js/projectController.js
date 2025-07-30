import { createProject } from "@js/projectFactory"
import { createProjectList } from "@js/projectList"
import { displayProject } from "@js/ProjectDOM"
import { hideModal } from "./projectModal"
import { displayTodo } from "./TodoDOM"
import { createTodo } from "./todoFactory"
import { initTodoModals } from "./todoModal"
import { parse } from "date-fns"
import { loadProjects, saveProjects } from "./storage"

export const projectList = createProjectList()
export let selectedProject = null

const loaded = loadProjects()

if (loaded.length === 0) {
	const defaultProject = createProject("My new project")
	projectList.add(defaultProject)
	selectedProject = defaultProject
	saveProjects(projectList.getAll())
} else {
	loaded.forEach((project) => projectList.add(project))
	selectedProject = projectList.getAll()[0]
}

displayProject()
displayTodo()
initTodoModals()

// Projects
export function createNewProject(modalInput, modal) {
	const projectName = modalInput.value.trim()
	if (!projectName) return alert("Please fill in name!")

	const newProject = createProject(projectName)
	projectList.add(newProject)

	displayProject()
	hideModal(modal)
	saveProjects(projectList.getAll())
}

export function deleteProject(project) {
	projectList.remove(project.id)
	displayProject()
	saveProjects(projectList.getAll())
}

export function renameProject(project, newName, modal) {
	projectList.rename(project.name, newName)
	displayProject()
	hideModal(modal)
	saveProjects(projectList.getAll())
}

export function selectProject(projectId) {
	selectedProject = projectList.getProjectById(projectId)

	highlightSelectedProject()
	displayTodo()
}

export function highlightSelectedProject() {
	document.querySelectorAll(".project").forEach((e) => {
		if (selectedProject === null) return

		if (e.dataset.id == selectedProject.id) {
			e.classList.add("highlight")
		} else {
			e.classList.remove("highlight")
		}
	})
}

// To-Do
export function createNewTodo(title, description, date, priority, modal) {
	const titleTodo = title.value.trim()

	let descriptionTodo = description.value.trim()
	if (descriptionTodo === "") descriptionTodo = null

	let dateTodo = date.value
	if (dateTodo === "") {
		dateTodo = null
	} else {
		dateTodo = parse(dateTodo, "yyyy-MM-dd", new Date())
	}

	const priorityTodo = priority.value

	const todo = createTodo(titleTodo, descriptionTodo, dateTodo, priorityTodo)
	selectedProject.todoList.add(todo)

	displayTodo()
	document.getElementById("todo-modal").classList.add("hidden")
	document.getElementById("todo-form").reset()
	saveProjects(projectList.getAll())
}

export function deleteTodo(todo) {
	selectedProject.todoList.remove(todo.id)
	displayTodo()
	saveProjects(projectList.getAll())
}

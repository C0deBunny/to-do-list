import { createProject } from "@js/projectFactory"
import { createProjectList } from "@js/projectList"
import { displayProject } from "@js/ProjectDOM"
import { hideModal } from "./projectModal"
import { displayTodo } from "./TodoDOM"
import { createTodo } from "./todoFactory"
import { initTodoModals } from "./todoModal"
import { parse } from "date-fns"
import { loadProjects, saveProjects } from "./storage"

// let allProjects = loadProjects()
// if (allProjects.length === 0) {
// 	allProjects = [projectFactory("inbox")]
// 	saveProjects(allProjects)
// }

export const projectList = createProjectList()
export let selectedProject = null

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
}

export function deleteProject(project) {
	projectList.remove(project.id)
	displayProject()
}

export function renameProject(project, newName, modal) {
	projectList.rename(project.name, newName)
	displayProject()
	hideModal(modal)
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
}

export function deleteTodo(todo) {
	selectedProject.todoList.remove(todo.id)
	displayTodo()
}

// EXAMPLE ITEMS
const testProject = createProject("Test Project")
projectList.add(testProject)
displayProject()

const testTodo = createTodo("This is a Test Todo", "with a good description", null, "high")
testProject.todoList.add(testTodo)

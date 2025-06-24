import { createProject } from "@js/projectFactory"
import { createProjectList } from "@js/projectList"
import { displayProject } from "@js/ProjectDOM"
import { initNewProjectModal } from "./projectModal"
import { hideModal } from "./projectModal"
import { displayTodo } from "./TodoDOM"
import { createTodo } from "./todoFactory"

export const projectList = createProjectList()
export let selectedProject = null

displayProject()
displayTodo()
initNewProjectModal()

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

// Testing
const testProject = createProject("test")
projectList.add(testProject)
displayProject()

const testTodo = createTodo("my new todo", "a good description", null, "high")
testProject.todoList.add(testTodo)

const testTodo2 = createTodo("my new todo 2", "a good description", null, "high")
testProject.todoList.add(testTodo2)

const testTodo3 = createTodo("Kiss Apple Toast", "a good description", null, "high")
testProject.todoList.add(testTodo3)

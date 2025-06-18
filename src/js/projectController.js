import { createProject } from "@js/projectFactory"
import { createProjectList } from "@js/projectList"
import { displayProject } from "@js/ProjectDOM"
import { initNewProjectModal } from "./projectModal"
import { hideModal } from "./projectModal"
import { displayTodo } from "./TodoDOM"

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
	selectedProject = projectId
	highlightSelectedProject()
	displayTodo()
}

export function highlightSelectedProject() {
	document.querySelectorAll(".project").forEach((e) => {
		if (e.dataset.id == selectedProject) {
			e.classList.add("highlight")
		} else {
			e.classList.remove("highlight")
		}
	})
}

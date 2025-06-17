import { createProject } from "@js/projectFactory"
import { createProjectList } from "@js/projectList"
import { displayProject } from "@js/ProjectDOM"
import { initNewProjectModal } from "./projectModal"
import { hideModal } from "./projectModal"

export const projectList = createProjectList()

displayProject()
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

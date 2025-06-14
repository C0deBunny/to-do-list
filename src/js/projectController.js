import { createProject } from "@js/projectFactory"
import { createProjectList } from "@js/projectList"
import { displayProject } from "@js/ProjectDOM"

export const projectList = createProjectList()

const EMPTY = ""

const modal = document.getElementById("project-modal")
const modalInput = document.getElementById("project-name-input")
const openBtn = document.getElementById("new-project")
const closeBtn = document.getElementById("project-modal-close")
const createProjectBtn = document.getElementById("create-project-btn")

function initModalEvents() {
	openBtn.addEventListener("click", () => {
		revealModal()
		clearModal()
	})

	closeBtn.addEventListener("click", () => {
		hideModal()
		clearModal()
	})

	window.addEventListener("click", (e) => {
		if (e.target === modal) {
			hideModal()
			clearModal()
		}
	})

	createProjectBtn.addEventListener("click", createNewProject)

	modalInput.addEventListener("keydown", (e) => {
		if (e.key === "Enter") {
			createNewProject()
		}
	})
}

function hideModal() {
	modal.classList.add("hidden")
}

function revealModal() {
	modal.classList.remove("hidden")
}

function clearModal() {
	modalInput.value = EMPTY
}

function createNewProject() {
	const projectName = modalInput.value.trim()
	if (!projectName) return alert("Please fill in name!")

	const newProject = createProject(projectName)
	projectList.add(newProject)
	displayProject()
	hideModal()
}

export function deleteProject(project) {
	projectList.remove(project.id)
	displayProject()
}

initModalEvents()
displayProject()

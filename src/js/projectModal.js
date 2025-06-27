import { createNewProject } from "./projectController"
import { deleteProject } from "./projectController"
import { renameProject } from "./projectController"
import { createNewTodo } from "./projectController"

const EMPTY = ""

export function hideModal(modal) {
	modal.classList.add("hidden")
}

function revealModal(modal) {
	modal.classList.remove("hidden")
}

function clearModal(modalInput) {
	modalInput.value = EMPTY
}

export function newProjectModal() {
	const modal = document.getElementById("project-modal")
	const modalInput = document.getElementById("project-name-input")
	const openBtn = document.getElementById("new-project")
	const closeBtn = document.getElementById("project-modal-close")
	const createProjectBtn = document.getElementById("create-project-btn")

	openBtn.addEventListener("click", () => {
		revealModal(modal)
		modalInput.focus()
		clearModal(modalInput)
	})

	closeBtn.addEventListener("click", () => {
		hideModal(modal)
		clearModal(modalInput)
	})

	window.addEventListener("click", (e) => {
		if (e.target === modal) {
			hideModal(modal)
			clearModal(modalInput)
		}
	})

	createProjectBtn.addEventListener("click", () => createNewProject(modalInput, modal))

	modalInput.addEventListener("keydown", (e) => {
		if (e.key === "Enter") {
			createNewProject(modalInput, modal)
		} else if (e.key === "Escape") {
			hideModal(modal)
			clearModal(modal)
		}
	})
}

export function openDeleteModal(project) {
	const modal = document.getElementById("project-delete-modal")
	const modalClose = document.getElementById("project-delete-modal-close")
	const yesBtn = document.getElementById("delete-project-yes")
	const noBtn = document.getElementById("delete-project-no")
	const modalHeader = document.getElementById("project-delete-name")

	revealModal(modal)

	modalHeader.textContent = `Delete ${project.name} ?`

	yesBtn.addEventListener("click", () => {
		deleteProject(project)
		hideModal(modal)
	})

	noBtn.addEventListener("click", () => hideModal(modal))

	modalClose.addEventListener("click", () => hideModal(modal))

	window.addEventListener("click", (e) => {
		if (e.target === modal) {
			hideModal(modal)
		}
	})
}

export function openEditModal(project) {
	const modal = document.getElementById("project-edit-modal")
	const modalClose = document.getElementById("project-edit-modal-close")
	const modalInput = document.getElementById("project-edit-name")
	const updateBtn = document.getElementById("update-project-btn")

	revealModal(modal)
	modalInput.focus()

	modalInput.value = project.name

	modalClose.addEventListener("click", () => hideModal(modal))

	window.addEventListener("click", (e) => {
		if (e.target === modal) {
			hideModal(modal)
		}
	})

	updateBtn.addEventListener("click", () => renameProject(project, modalInput.value, modal))

	modalInput.addEventListener("keydown", (e) => {
		if (e.key === "Enter") {
			renameProject(project, modalInput.value, modal)
		} else if (e.key === "Escape") {
			hideModal(modal)
		}
	})
}

import { createNewTodo } from "./projectController"
import { deleteTodo } from "./projectController"

let selectedTodo = null

function hideModal(modal) {
	modal.classList.add("hidden")
}

function newTodoModal() {
	const modal = document.getElementById("todo-modal")
	const form = document.getElementById("todo-form")
	const title = document.getElementById("title-todo")
	const description = document.getElementById("description-todo")
	const date = document.getElementById("date-todo")
	const priority = document.getElementById("priority-todo")
	const closeBtn = document.getElementById("todo-modal-close")

	form.addEventListener("submit", (e) => {
		e.preventDefault()
		e.stopPropagation()

		if (!form.checkValidity()) {
			form.reportValidity() // Optional: triggers the browser UI for validation
			return
		}
		createNewTodo(title, description, date, priority, modal)
	})

	closeBtn.addEventListener("click", () => {
		hideModal(modal)
		form.reset()
	})

	window.addEventListener("click", (e) => {
		if (e.target === modal) {
			hideModal(modal)
			form.reset()
		}
	})
}

function DeleteModal() {
	const modal = document.getElementById("todo-delete-modal")
	const modalClose = document.getElementById("todo-delete-modal-close")
	const yesBtn = document.getElementById("delete-todo-yes")
	const noBtn = document.getElementById("delete-todo-no")

	yesBtn.addEventListener("click", () => {
		deleteTodo(selectedTodo)
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

export function initTodoModals() {
	newTodoModal()
	DeleteModal()
}

export function revealDeleteModal(todo) {
	const modal = document.getElementById("todo-delete-modal")
	const header = document.getElementById("todo-delete-name")

	modal.classList.remove("hidden")
	header.textContent = `Delete ${todo.title} ?`

	selectedTodo = todo
}

import { createNewTodo } from "./projectController"

const EMPTY = ""

export function hideTodoModal(modal) {
	modal.classList.add("hidden")
}

function revealModal(modal) {
	modal.classList.remove("hidden")
}

export function newTodoModal() {
	const modal = document.getElementById("todo-modal")
	const form = document.getElementById("todo-form")
	const title = document.getElementById("title-todo")
	const description = document.getElementById("description-todo")
	const date = document.getElementById("date-todo")
	const priority = document.getElementById("priority-todo")
	const createBtn = document.getElementById("create-todo-btn")
	const closeBtn = document.getElementById("todo-modal-close")

	revealModal(modal)

	createBtn.addEventListener("click", () => {
		createNewTodo(title, description, date, priority, modal)
	})

	closeBtn.addEventListener("click", () => {
		hideTodoModal(modal)
		form.reset()
	})

	window.addEventListener("click", (e) => {
		if (e.target === modal) {
			hideTodoModal(modal)
			form.reset()
		}
	})
}

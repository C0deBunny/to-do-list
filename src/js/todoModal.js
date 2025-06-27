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
	const closeBtn = document.getElementById("todo-modal-close")

	revealModal(modal)

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

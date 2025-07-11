import { selectedProject } from "./projectController"
import { revealDeleteModal } from "./todoModal"

const EMPTY = ""

export function displayTodo() {
	const todoContainer = document.getElementById("todo-container")
	todoContainer.innerHTML = EMPTY

	if (selectedProject === null) return

	// for each todo in selected project () =>
	selectedProject.todoList.getAll().forEach((e) => {
		const todo = document.createElement("div")
		todo.classList.add("todo")

		const title = document.createElement("h2")
		title.textContent = e.title

		const description = document.createElement("h3")
		description.textContent = e.description

		const icons = document.createElement("div")
		icons.classList = "todo-icon-container"

		const editBtn = document.createElement("span")
		editBtn.textContent = "✎"
		editBtn.classList = "edit-icon"
		editBtn.addEventListener("click", (event) => {
			event.stopPropagation()
		})

		const deleteBtn = document.createElement("span")
		deleteBtn.textContent = "×"
		deleteBtn.classList = "delete-icon"
		deleteBtn.addEventListener("click", (event) => {
			event.stopPropagation()
			revealDeleteModal(e)
		})

		icons.appendChild(editBtn)
		icons.appendChild(deleteBtn)
		todo.appendChild(icons)
		todo.appendChild(title)
		todo.appendChild(description)
		todoContainer.appendChild(todo)
	})

	// create new todo
	const newTodoBtn = document.createElement("div")
	newTodoBtn.innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
 		<title>plus-thick</title>
  		<path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />
		</svg>
	`
	newTodoBtn.classList.add("newTodoBtn")

	newTodoBtn.addEventListener("click", () => {
		document.getElementById("todo-modal").classList.remove("hidden")
	})

	todoContainer.appendChild(newTodoBtn)
}

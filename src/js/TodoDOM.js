import { selectedProject } from "./projectController"
import { revealDeleteModal } from "./todoModal"

const EMPTY = ""

export function displayTodo() {
	const todoContainer = document.getElementById("todo-container")
	todoContainer.innerHTML = EMPTY

	if (selectedProject === null) return

	// for each todo in selected project () =>
	selectedProject.todoList.getAll().forEach((e) => {
		const todoContent = document.createElement("div")
		todoContent.classList.add("todo-content")

		const todo = document.createElement("div")
		todo.classList.add("todo")

		const dropDown = document.createElement("div")
		dropDown.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <title>play</title>
    <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
  </svg>
`
		dropDown.classList.add("todoDropDown")
		dropDown.addEventListener("click", toggleDropdown)

		const title = document.createElement("h2")
		title.textContent = e.title

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

		const description = document.createElement("h3")
		description.textContent = e.description
		description.classList.add("todo-description", "hidden")

		switch (e.priority) {
			case "low":
				todoContent.classList.add("priority-low")
				break
			case "medium":
				todoContent.classList.add("priority-medium")
				break
			case "high":
				todoContent.classList.add("priority-high")
		}

		icons.appendChild(editBtn)
		icons.appendChild(deleteBtn)
		todoContent.appendChild(dropDown)
		todoContent.appendChild(icons)
		todoContent.appendChild(title)
		todoContent.appendChild(description)
		todo.appendChild(todoContent)
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

function toggleDropdown(e) {
	const todo = e.target.closest(".todo")
	const description = todo.querySelector(".todo-description")

	if (description) {
		description.classList.toggle("hidden")
	}
}

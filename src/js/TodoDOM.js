import { format, isPast, isToday } from "date-fns"
import { selectedProject } from "./projectController"
import { revealDeleteModal } from "./todoModal"

const EMPTY = ""

export function displayTodo() {
	const todoContainer = document.getElementById("todo-container")
	todoContainer.innerHTML = EMPTY

	if (selectedProject === null) return

	// for each todo in selected project () =>
	const sortedTodoList = [...selectedProject.todoList.getAll()].sort((a, b) => {
		if (!a.dueDate) return 1
		if (!b.dueDate) return -1
		return a.dueDate - b.dueDate
	})
	sortedTodoList.forEach((e) => {
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
		title.classList.add("todo-title")
		title.textContent = e.title

		const dueDate = document.createElement("h5")
		if (e.dueDate == null) {
			dueDate.textContent = "N/A"
		} else {
			dueDate.textContent = format(e.dueDate, "dd MMM yyyy")
			if (isPast(e.dueDate) && !isToday(e.dueDate)) {
				dueDate.classList.add("overdue")
			} else if (isToday(e.dueDate)) {
				dueDate.classList.add("dueToday")
			}
		}

		const header = document.createElement("div")
		header.classList.add("todo-header")

		const icons = document.createElement("div")
		icons.classList = "todo-icon-container"

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

		icons.appendChild(deleteBtn)
		header.appendChild(dueDate)
		header.appendChild(title)
		todoContent.appendChild(dropDown)
		todoContent.appendChild(header)
		todoContent.appendChild(icons)
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
	const dropdownIcon = todo.querySelector(".todoDropDown svg")

	if (description) {
		description.classList.toggle("hidden")
		dropdownIcon.classList.toggle("dropdown-open")
	}
}

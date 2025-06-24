import { selectedProject } from "./projectController"
import { createTodo } from "./todoFactory"
import { newTodoModal } from "./todoModal"

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

		todo.appendChild(title)
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
		// Open modal
		newTodoModal()

		//test
		const todo = createTodo("title", "description", null, "high")

		selectedProject.todoList.add(todo)
		displayTodo()
	})

	todoContainer.appendChild(newTodoBtn)
}

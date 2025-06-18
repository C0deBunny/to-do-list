import { selectedProject } from "./projectController"

const EMPTY = ""

export function displayTodo() {
	const todoContainer = document.getElementById("todo-container")
	todoContainer.innerHTML = EMPTY

	if (selectedProject === null) return

	// for each todo in selected project () =>
	const todo = document.createElement("div")
	todo.classList.add("todo")

	todoContainer.appendChild(todo)

	// create new todo
}

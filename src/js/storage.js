import { createTodoList } from "./todoList"

export function saveProjects(projects) {
	const serialized = JSON.stringify(projects, (key, value) => {
		if (key === "dueDate" && value instanceof Date) {
			return value.toISOString()
		}

		if (key === "todoList" && value && typeof value.getAll === "function") {
			return value.getAll()
		}

		return value
	})
	localStorage.setItem("projects", serialized)
}

export function loadProjects() {
	const data = localStorage.getItem("projects")
	console.log(data)

	if (!data) return []

	const parsed = JSON.parse(data)

	return parsed.map((project) => {
		const todoList = createTodoList()

		// Rebuild each todo and add to the new todoList
		project.todoList.forEach((todo) => {
			todoList.add({
				...todo,
				dueDate: todo.dueDate ? new Date(todo.dueDate) : null,
			})
		})

		return {
			...project,
			todoList,
		}
	})
}

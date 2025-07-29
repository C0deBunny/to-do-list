export function saveProjects(projects) {
	const serialized = JSON.stringify(projects, (key, value) => {
		if (key === "dueDate" && value instanceof Date) {
			return value.toISOString()
		}
		return value
	})
	localStorage.setItem("projects", serialized)
}

export function loadProjects() {
	const data = localStorage.getItem("projects")
	if (!data) return []

	const parsed = JSON.parse(data)
	// convert back dates and rebuild via factories if needed
	return parsed.map((project) => {
		return {
			...project,
			todoList: project.todoList.map((todo) => ({
				...todo,
				dueDate: todo.dueDate ? new Date(todo.dueDate) : null,
			})),
		}
	})
}

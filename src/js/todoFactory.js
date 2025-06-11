export const createTodo = (title, description, dueDate = null, priority) => {
	return {
		title,
		description,
		dueDate,
		priority,
		completed: false,
		toggle() {
			this.completed = !this.completed
		},
	}
}

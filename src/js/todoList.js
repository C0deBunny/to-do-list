export const createTodoList = () => {
	let todos = []

	return {
		add(todo) {
			todos.push(todo)
		},
		remove(id) {
			const index = todos.findIndex((todo) => todo.id === id)
			if (index !== -1) {
				todos.splice(index, 1)
			}
		},
		getAll() {
			return [...todos]
		},
		clearCompleted() {
			todos = todos.filter((todo) => !todo.completed)
		},
	}
}

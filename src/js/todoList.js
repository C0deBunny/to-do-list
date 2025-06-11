export const createTodoList = () => {
	let todos = []

	return {
		add(todo) {
			todos.push(todo)
		},
		remove(index) {
			todos.splice(index, 1)
		},
		getAll() {
			return [...todos]
		},
		clearCompleted() {
			todos = todos.filter((todo) => !todo.completed)
		},
	}
}

import { v4 as uuidv4 } from "uuid"

export const createTodo = (title, description, dueDate, priority) => {
	const id = uuidv4()

	console.log(title, description, dueDate, priority)

	return {
		title,
		id,
		description,
		dueDate,
		priority,
		completed: false,
		toggle() {
			this.completed = !this.completed
		},
	}
}

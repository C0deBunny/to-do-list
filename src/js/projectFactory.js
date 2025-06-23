import { v4 as uuidv4 } from "uuid"
import { createTodoList } from "./todoList"

export const createProject = (name) => {
	const id = uuidv4()
	const todoList = createTodoList()

	return {
		name,
		id,
		todoList,
	}
}

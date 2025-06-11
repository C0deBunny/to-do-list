import { v4 as uuidv4 } from "uuid"

export const createProject = (name) => {
	const id = uuidv4()

	return {
		name,
		id,
		todos: [],
	}
}

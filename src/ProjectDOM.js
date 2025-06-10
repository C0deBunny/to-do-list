import { projectList } from "./projectController"

export const displayProject = () => {
	const EMPTY = ""

	const projectListContainer = document.getElementById("project-list")
	projectListContainer.innerHTML = EMPTY

	projectList.getAll().forEach((element) => {
		const projectNameDOM = document.createElement("li")
		projectNameDOM.innerHTML = element.name
		projectListContainer.appendChild(projectNameDOM)
	})
}

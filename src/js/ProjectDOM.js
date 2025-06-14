import { projectList } from "@js/projectController"
import { deleteProject } from "@js/projectController"

const EMPTY = ""

export const displayProject = () => {
	const projectListContainer = document.getElementById("project-list")
	projectListContainer.innerHTML = EMPTY

	projectList.getAll().forEach((element) => {
		const projectNameDOM = document.createElement("li")
		projectNameDOM.innerHTML = `<h3>${element.name}</h3>`

		const deleteBtn = document.createElement("span")
		deleteBtn.textContent = "×"
		deleteBtn.addEventListener("click", () => deleteProject(element))

		projectNameDOM.appendChild(deleteBtn)
		projectListContainer.appendChild(projectNameDOM)
	})
}

import { projectList } from "@js/projectController"
import { openDeleteModal } from "./projectModal"
import { openEditModal } from "./projectModal"

const EMPTY = ""

export const displayProject = () => {
	const projectListContainer = document.getElementById("project-list")
	projectListContainer.innerHTML = EMPTY

	projectList.getAll().forEach((element) => {
		const projectNameDOM = document.createElement("li")
		projectNameDOM.innerHTML = `<h3>${element.name}</h3>`

		const icons = document.createElement("div")
		icons.classList = "icon-container"

		const editBtn = document.createElement("span")
		editBtn.textContent = "✎"
		editBtn.classList = "edit-icon"
		editBtn.addEventListener("click", () => openEditModal(element))

		const deleteBtn = document.createElement("span")
		deleteBtn.textContent = "×"
		deleteBtn.classList = "delete-icon"
		deleteBtn.addEventListener("click", () => openDeleteModal(element))

		icons.appendChild(editBtn)
		icons.appendChild(deleteBtn)
		projectNameDOM.appendChild(icons)
		projectListContainer.appendChild(projectNameDOM)
	})
}

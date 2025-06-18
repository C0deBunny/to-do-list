import { projectList } from "@js/projectController"
import { openDeleteModal } from "./projectModal"
import { openEditModal } from "./projectModal"
import { selectProject } from "@js/projectController"
import { highlightSelectedProject } from "@js/projectController"

const EMPTY = ""

export const displayProject = () => {
	const projectListContainer = document.getElementById("project-list")
	projectListContainer.innerHTML = EMPTY

	projectList.getAll().forEach((element) => {
		const projectNameDOM = document.createElement("li")
		projectNameDOM.innerHTML = `<h3>${element.name}</h3>`
		projectNameDOM.classList.add("project")
		projectNameDOM.dataset.id = element.id

		projectNameDOM.addEventListener("click", (e) => {
			e.stopPropagation()
			selectProject(element.id)
		})

		const icons = document.createElement("div")
		icons.classList = "icon-container"

		const editBtn = document.createElement("span")
		editBtn.textContent = "✎"
		editBtn.classList = "edit-icon"
		editBtn.addEventListener("click", (e) => {
			e.stopPropagation()
			openEditModal(element)
		})

		const deleteBtn = document.createElement("span")
		deleteBtn.textContent = "×"
		deleteBtn.classList = "delete-icon"
		deleteBtn.addEventListener("click", (e) => {
			e.stopPropagation()
			openDeleteModal(element)
		})

		icons.appendChild(editBtn)
		icons.appendChild(deleteBtn)
		projectNameDOM.appendChild(icons)
		projectListContainer.appendChild(projectNameDOM)

		highlightSelectedProject()
	})
}

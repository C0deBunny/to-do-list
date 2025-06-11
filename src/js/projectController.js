import { createProject } from "@js/projectFactory"
import { createProjectList } from "@js/projectList"
import { displayProject } from "@js/ProjectDOM"

// test
const project1 = createProject("Test_Project_1")
export const projectList = createProjectList()
projectList.add(project1)

displayProject()

const modal = document.getElementById("project-modal")
const modalInput = document.getElementById("project-name-input")
const openBtn = document.getElementById("new-project")
const closeBtn = document.getElementById("project-modal-close")

const EMPTY = ""

openBtn.addEventListener("click", () => {
	modal.classList.remove("hidden")
})

closeBtn.addEventListener("click", () => {
	modal.classList.add("hidden")
	modalInput.value = EMPTY
})

window.addEventListener("click", (e) => {
	if (e.target === modal) {
		modal.classList.add("hidden")
	}
})

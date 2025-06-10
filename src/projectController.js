import { createProject } from "./projectFactory"
import { createProjectList } from "./projectList"
import { displayProject } from "./ProjectDOM"

const project1 = createProject("Test_Project_1")
export const projectList = createProjectList()
projectList.add(project1)

displayProject()

document.getElementById("new-project").addEventListener("click", () => {
	console.log("new-project button was clicked!")
})

// const modal = document.getElementById("modal")
// const openBtn = document.getElementById("new-project")
// const closeBtn = document.getElementById("close-modal")

// openBtn.addEventListener("click", () => {
// 	modal.classList.remove("hidden")
// })

// closeBtn.addEventListener("click", () => {
// 	modal.classList.add("hidden")
// })

// // Optional: Close when clicking outside modal content
// window.addEventListener("click", (e) => {
// 	if (e.target === modal) {
// 		modal.classList.add("hidden")
// 	}
// })

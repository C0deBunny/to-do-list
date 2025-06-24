const EMPTY = ""

export function hideModal(modal) {
	modal.classList.add("hidden")
}

function revealModal(modal) {
	modal.classList.remove("hidden")
}

function clearModal(modal) {
	modal.value = EMPTY
}

export function newTodoModal() {
	const modal = document.getElementById("todo-modal")
	const closeBtn = document.getElementById("todo-modal-close")

	revealModal(modal)

	closeBtn.addEventListener("click", () => {
		hideModal(modal)
	})

	window.addEventListener("click", (e) => {
		if (e.target === modal) {
			hideModal(modal)
		}
	})
}

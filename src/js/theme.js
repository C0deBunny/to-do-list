export function toggleTheme() {
	const currentTheme = document.documentElement.getAttribute("data-theme")
	const newTheme = currentTheme === "dark" ? "light" : "dark"

	document.document.documentElement.setAttribute("data-theme", newTheme)
	localStorage.setItem("theme", newTheme)
}

const savedTheme = localStorage.getItem("theme") || "light"
document.documentElement.setAttribute("data-theme", savedTheme)

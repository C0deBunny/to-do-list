function applyTheme(theme) {
	document.documentElement.setAttribute("data-theme", theme)
	localStorage.setItem("theme", theme)
}

function toggleTheme() {
	const currentTheme = document.documentElement.getAttribute("data-theme")
	const newTheme = currentTheme === "dark" ? "light" : "dark"
	applyTheme(newTheme)
}

function initTheme() {
	const savedTheme = localStorage.getItem("theme")

	if (savedTheme) {
		applyTheme(savedTheme)
	} else {
		applyTheme("dark")
	}
}

function initThemeSelector() {
	document.getElementById("theme-selector").addEventListener("click", toggleTheme)
}

initTheme()
initThemeSelector()

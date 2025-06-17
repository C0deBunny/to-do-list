export const createProjectList = () => {
	let projects = []

	return {
		add(project) {
			projects.push(project)
		},
		remove(id) {
			const index = projects.findIndex((project) => project.id === id)
			if (index !== -1) {
				projects.splice(index, 1)
			}
		},
		rename(oldName, newName) {
			projects.find((project) => project.name === oldName).name = newName
		},
		getAll() {
			return [...projects]
		},
		getProjectById(id) {
			return projects.find((project) => project.id === id)
		},
	}
}

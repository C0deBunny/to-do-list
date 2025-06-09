export const createProjectList = () => {
	let projects = []

	return {
		add(project) {
			projects.push(project)
		},
		remove(index) {
			projects.splice(index, 1)
		},
		getAll() {
			return [...projects]
		},
		getProjectById(id) {
			return projects.find((project) => project.id === id)
		},
	}
}

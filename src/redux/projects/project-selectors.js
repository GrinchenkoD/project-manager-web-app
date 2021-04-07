const projectsSelector = state => state.projects.projectsItems;
const projectsErrorSelector = state => state.projects.projectsError;
const projectsLoadingSelector = state => state.projects.projectsLoading;

export { projectsSelector, projectsErrorSelector, projectsLoadingSelector };

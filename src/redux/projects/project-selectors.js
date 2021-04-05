const projectsSelector = state => state.projects.projectsItems;
const projectsErrorSelector = state => state.sprints.projectsError;
const projectsLoadingSelector = state => state.sprints.projectsLoading;

export { projectsSelector, projectsErrorSelector, projectsLoadingSelector };

const getToken = state => state;
const getTasks = state => state.tasks.tasksItems;
const tasksErrorSelector = state => state.sprints.tasksError;
const tasksLoadingSelector = state => state.sprints.tasksLoading;
export { getToken, getTasks, tasksErrorSelector, tasksLoadingSelector };

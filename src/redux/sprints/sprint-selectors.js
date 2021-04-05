const getToken = state => state;
const getSprints = state => state.sprints.sprintsItems;
const sprintsErrorSelector = state => state.sprints.sprintsError;
const sprintsLoadingSelector = state => state.sprints.sprintsLoading;

export { getToken, getSprints, sprintsErrorSelector, sprintsLoadingSelector };

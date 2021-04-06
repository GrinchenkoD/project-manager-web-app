const isAuthentificated = state => state.auth?.isAuthentificated;
const getUserEmail = state => state.auth?.user?.email;
// const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;
const authLoadingSelector = state => state.auth.authLoading;

export const authSelectors = {
  isAuthentificated,
  getUserEmail,
  authLoadingSelector,
};

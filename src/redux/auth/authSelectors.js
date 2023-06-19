export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefresh = (state) => state.auth.isRefresh;
export const selectUserName = state => state.auth.user.name;
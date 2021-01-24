export const usersSelector = (state) => state.users.users;
export const pageSelector = (state) => state.users.page;
export const sinceSelector = (state) => state.users.since;
export const usersByUsernameSelector = (state) => state.usersByUsername.usersByUsername;
export const totalCountSelector = (state) => state.usersByUsername.usersByUsername.total_count;
export const loaderUsersByUsernameSelector = (state) => state.usersByUsername.loading;
export const loaderUserInfoSelector = state => state.userData.loading;
export const userInfoSelector = state => state.userData.userData;
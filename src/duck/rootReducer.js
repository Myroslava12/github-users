import {combineReducers} from "redux";
import {usersReducer} from "./users/reducer";
import {userDataReducer} from "./userInfo/reducer";
import {usersByUsernameReducer} from "./usersByUsername/reducer";
import {usersSearchReducer} from "./usersSearch/reducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    userData: userDataReducer,
    usersByUsername: usersByUsernameReducer,
    usersSearch: usersSearchReducer
})
import {combineReducers} from "redux";
import {usersReducer} from "./users/reducer";
import {userDataReducer} from "./userInfo/reducer";
import {usersByUsernameReducer} from "./usersByUsername/reducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    userData: userDataReducer,
    usersByUsername: usersByUsernameReducer
})
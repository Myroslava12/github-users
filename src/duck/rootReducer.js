import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
import {userDataReducer} from "./userDataReducer";
import {usersByUsernameReducer} from "./usersByUsernameReducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    userData: userDataReducer,
    usersByUsername: usersByUsernameReducer
})
import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
import {userDataReducer} from "./userDataReducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    userData: userDataReducer
})
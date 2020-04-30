import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
    users: usersReducer,
    userSession: sessionReducer
});

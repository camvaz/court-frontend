import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";
import usersReducer from "./usersReducer";
import tournamentReducer from "./tournamentReducer";

export default combineReducers({
    users: usersReducer,
    userSession: sessionReducer,
    tournaments: tournamentReducer
});

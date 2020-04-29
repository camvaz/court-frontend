import { SET_USERS, SET_USER_SESSION } from "./actionTypes";

export const setUsers = users => ({
    type: SET_USERS,
    payload: {
        users
    }
});

export const setUserSession = userSession => ({
    type: SET_USER_SESSION,
    payload: {
        userSession
    }
});

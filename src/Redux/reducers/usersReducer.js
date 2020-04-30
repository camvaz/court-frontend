import { SET_USERS } from "../actionTypes";

const initialUsersState = {
    list: {}
};

export default function (state = initialUsersState, action) {
    const { payload, type } = action;
    const newState = { ...state };
    switch (type) {
        case SET_USERS: {
            const { users } = payload;
            newState.list = users;
            return newState;
        }
        default: {
            return newState;
        }
    }
}

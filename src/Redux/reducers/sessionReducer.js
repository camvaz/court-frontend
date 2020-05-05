import { SET_USER_SESSION } from "../actionTypes";

const initialUserSessionState = {
    session: {
        user: {},
        token: ""
    }
};

export default function (state = initialUserSessionState, action) {
    const { payload, type } = action;
    const newState = { ...state };
    switch (type) {
        case SET_USER_SESSION: {
            const { userSession } = payload;
            newState.userSession = userSession;
            return newState;
        }
        default: {
            return newState;
        }
    }
}

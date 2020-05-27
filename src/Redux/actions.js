import {
    SET_USERS,
    SET_USER_SESSION,
    SET_TOURNAMENTS,
    SET_INSCRIPTIONS,
    SET_PARTICIPANTS,
    SET_PLAYERS,
    SET_MATCHES
} from "./actionTypes";

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

export const setTournaments = tournaments => ({
    type: SET_TOURNAMENTS,
    payload: {
        tournaments
    }
});

export const setInscriptions = inscriptions => ({
    type: SET_INSCRIPTIONS,
    payload: {
        inscriptions
    }
});

export const setParticipants = participants => ({
    type: SET_PARTICIPANTS,
    payload: {
        participants
    }
});

export const setPlayers = players => ({
    type: SET_PLAYERS,
    payload: {
        players
    }
});

export const setMatches = matches => ({
    type: SET_MATCHES,
    payload: {
        matches
    }
})

import axios from 'axios';

const initialState = {
    id: null,
    username: "",
    password: "",
}

const login_user = 'login_user';
const logout_user = 'logout_user';

export function loginUser({userId, username}) {
    return {
        type: login_user,
        payload: {
            id: userId,
            username,
        }
    }
}

export function logoutUser() {
    return {
        type: login_user,
        payload: initialState
    }
}
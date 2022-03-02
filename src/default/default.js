import axios from "axios";

const initialState = {
    id: null,
    username: "",
    password: "",
}

const login_user = 'login_user';
const logout_user = 'logout_user';
const get_user = 'get_user';
export function login_User({userId, username}) {
    return {
        type: login_user,
        payload: {
            id: userId,
            username,
        }
    }
}

export function logout_User() {
    return {
        type: logout_user,
        payload: initialState
    }
}

export function getuser() {
    const user = axios.get('/auth/user')
    return {
        type: get_user,
        payload: user
    }
}

export default function(state = initialState, action) {
    switch(action.type) {
        case login_User:
            return { ...state, ...action.payload, isLoggedIn: true}
        case logout_user:
            return {...state, ...action.payload}
        case get_user + '_PENDING':
            return state
        case get_user + '_FULFILLED':
            return {...state, user: action.payload.data, isLoggedIn: true}
        case get_user + '_REJECTED':
            return initialState
        default:
            return initialState  
    }
}
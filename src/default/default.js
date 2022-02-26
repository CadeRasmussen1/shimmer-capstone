
const initialState = {
    id: null,
    username: "",
    password: "",
}

const login_user = 'login_user';
const logout_user = 'logout_user';

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
export default function(state = initialState, action) {
    switch(action.type) {
        case login_User:
            return { ...state, ...action.payload, isLoggedIn: true}
        case logout_user:
            return {...state, ...action.payload}
        
    }
}
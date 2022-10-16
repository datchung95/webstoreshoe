import { createSlice } from '@reduxjs/toolkit'
import { TOKEN, USER_LOGIN_LOCAL } from '../../utils/settings/config';

let localUser = {}

if (localStorage.getItem(USER_LOGIN_LOCAL)) {
    localUser = JSON.parse(localStorage.getItem(USER_LOGIN_LOCAL))
}

const initialState = {
    userLocal: localUser,
    profile: {},
}

const userReducer = createSlice({
    name: "userReducer",
    initialState,
    reducers: {
        signInReducer: (state, action) => {
            localStorage.setItem(USER_LOGIN_LOCAL, JSON.stringify(action.payload))
            localStorage.setItem(TOKEN, action.payload.accessToken)
            state.userLocal = action.payload
        },
        getProfileReducer: (state, action) => {
            state.profile = action.payload
        },
    }
});

export const { 
    signInReducer, 
    getProfileReducer 
} = userReducer.actions

export default userReducer.reducer
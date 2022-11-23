import { createSlice } from "@reduxjs/toolkit";
import { login } from "../actions/authAction";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogin: localStorage.getItem('user') && true,
        user: ''
    },
    reducers:{
        logOut: (state)=>{
            state.isLogin = false;
            state.user = '';
            localStorage.removeItem('user')
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(login.fulfilled,(state, action)=>{
            state.isLogin = true;
            state.user = action.payload;
        })
    }
});

export const {logOut} = userSlice.actions;

export default userSlice.reducer;
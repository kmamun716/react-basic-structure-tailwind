import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk('user/login', async(userData)=>{
    const user = {email: userData.email};
    localStorage.setItem('user', JSON.stringify(user));
    return user;
})
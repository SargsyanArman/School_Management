// src/store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null,
    reducers: {
        setUser: (state, action) => {
            const user = action.payload;
            sessionStorage.setItem('user', JSON.stringify(user)); // Сохраняем пользователя в sessionStorage
            return user;
        },
        clearUser: () => {
            sessionStorage.removeItem('user'); // Удаляем пользователя из sessionStorage
            return null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;

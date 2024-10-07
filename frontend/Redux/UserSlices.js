import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null,
    reducers: {
        setUser: (state, action) => {
            const user = action.payload;
            sessionStorage.setItem('user', JSON.stringify(user));
            return user;
        },
        clearUser: () => {
            sessionStorage.removeItem('user');
            return null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;

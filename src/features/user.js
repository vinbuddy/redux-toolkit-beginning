import { createSlice } from "@reduxjs/toolkit";

const initValue = { value: null };

const userSlice = createSlice({
    name: "user",
    initialState: initValue,
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state, action) => {
            state.value = initValue.value;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

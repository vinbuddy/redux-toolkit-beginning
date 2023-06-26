import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme", // state name
    initialState: { themeColor: "#fff" },
    reducers: {
        changeTheme: (state, action) => {
            state.themeColor = action.payload;
        },
    },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;

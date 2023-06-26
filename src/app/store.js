import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme";
import userSlice from "../features/user";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        user: userSlice,
    },
});

import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";
import authorsReducer from "./authorsSlice";
import categoriesReducer from "./categoriesSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    authors: authorsReducer,
    categories: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

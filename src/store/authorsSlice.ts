import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthors } from "../api/authors/authors";
import type { Author } from "../api/authors/types";

interface AuthorsState {
  items: Author[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AuthorsState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchAuthors = createAsyncThunk("authors/fetchAuthors", () => {
  return getAuthors();
});

const authorsSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthors.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchAuthors.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export default authorsSlice.reducer;

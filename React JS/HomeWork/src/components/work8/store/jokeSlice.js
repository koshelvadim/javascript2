import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchJoke = createAsyncThunk("joke/fetchJoke", async (url, thunkApi) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error({ message: response.message });
    }
    const data = await response.json();

    return data.value;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const initialState = {
  joke: "",
  loading: false,
  error: null,
};

const jokeSlice = createSlice({
  name: "joke",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJoke.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJoke.fulfilled, (state, action) => {
        state.loading = true;
        state.joke = action.payload;
      })
      .addCase(fetchJoke.rejected, (state, action) => {
        state.loading = true;
        state.joke = action.payload;
      });
  },
});

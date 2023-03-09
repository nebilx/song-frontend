import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: {
    data: [],
    statics: null,
    genre: [],
    isLoading: false,
    message: "",
    error: "",
  },
  reducers: {
    getSong(state) {
      state.isLoading = true;
    },
    getStatics(state) {
      state.isLoading = true;
    },
    getGenre(state) {
      state.isLoading = true;
    },
    setSong(state, action) {
      state.data = action.payload;
    },
    setStatics(state, action) {
      state.statics = action.payload;
    },
    setGenre(state, action) {
      state.genre = action.payload;
    },
    addSong(state) {
      state.isLoading = true;
    },
    editSong(state) {
      state.isLoading = true;
    },
    deleteSong(state) {
      state.isLoading = true;
    },

    setIsLoading(state) {
      state.isLoading = false;
    },

    //success message
    setMessage(state, action) {
      state.message = action.payload;
    },
    //error messages
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  getSong,
  getStatics,
  getGenre,
  setSong,
  setStatics,
  setGenre,
  setMessage,
  setError,
  setIsLoading,
  addSong,
  editSong,
  deleteSong,
} = songSlice.actions;

export default songSlice.reducer;

import { bindActionCreators, createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
  name: "text",
  initialState: {
    words: 0,
    characters: 0,
    sentences: 0,
    pronouns: 0,
    paragraphs: 0,
    longestWord: "-",
    avarageReadingTime: 0,
  },
  reducers: {
    setState(state, action) {
      state.words = action.payload.words;
      state.characters = action.payload.characters;
      state.sentences = action.payload.sentences;
      state.pronouns = action.payload.pronouns;
      state.paragraphs = action.payload.paragraphs;
      state.longestWord = action.payload.longestWord;
      state.avarageReadingTime = action.payload.avarageReadingTime;
    },
  },
});

export const textActions = textSlice.actions;

export default textSlice;

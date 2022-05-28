import { createSlice } from "@reduxjs/toolkit";
import { MyDiaryState, initialStateType } from "./types";
import { RootState } from "../store";

const myDiary: MyDiaryState[] = [
  {
    id: 0,
    date: "2021.05.21",
    label: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: 1,
    date: "2021.05.21",
    label: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: 2,
    date: "2021.05.21",
    label: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: 3,
    date: "2021.05.21",
    label: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: 4,
    date: "2021.05.21",
    label: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: 5,
    date: "2021.05.21",
    label: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: 6,
    date: "2021.05.21",
    label: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: 7,
    date: "2021.05.21",
    label: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
];

const initialState: initialStateType = {
  data: myDiary,
};

export const myDiarySlice = createSlice({
  name: "myDiary",
  initialState,
  reducers: {},
});

export const selectMyDiary = (state: RootState) => state.myDiary;

export default myDiarySlice.reducer;

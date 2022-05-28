import { createSlice } from "@reduxjs/toolkit";
import { MyExcercireState, initialStateType } from "./types";
import { RootState } from "../store";

const myExcercire: MyExcercireState[] = [
  {
    id: 10,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 11,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 12,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 13,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 14,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 15,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 16,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 17,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 18,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 19,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 111,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 112,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 113,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 114,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 115,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 116,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 117,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 118,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 119,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 121,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 122,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 123,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 124,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 125,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 126,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 127,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 128,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 129,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 131,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 132,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 133,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 134,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 135,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
  {
    id: 136,
    label: "家事全般（立位・軽い）",
    min: 10,
    calo: 26,
  },
];

const initialState: initialStateType = {
  data: myExcercire,
};

export const myExcercireSlice = createSlice({
  name: "myExcercire",
  initialState,
  reducers: {},
});

export const selectMyExcercire = (state: RootState) => state.myExcercire;

export default myExcercireSlice.reducer;

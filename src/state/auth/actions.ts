import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCurrentHealth = createAsyncThunk("my-health", async () => {
  const res = await fetch("https://5e1c2572db8a52001414ca39.mockapi.io/api/v1/my-health");
  return res.json();
});

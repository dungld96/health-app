import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/reducer";
import myExcercireReducer from "./my-exercire/reducer";
import myDiaryReducer from "./my-diary/reducer";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    myExcercire: myExcercireReducer,
    myDiary: myDiaryReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

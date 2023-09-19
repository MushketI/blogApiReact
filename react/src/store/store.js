import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./slices/userSlice"
import settingSlice from "./slices/settingSlice"
import postSlices from "./slices/postSlices"

export const store = configureStore({
  reducer: {
    user: userSlice,
    setting: settingSlice,
    post: postSlices,
  },
})

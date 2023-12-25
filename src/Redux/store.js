import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./Slices/AuthSlice";

// ab iss store ko hame configure krna ha <App> component ke sath uske lie main.jsx file me jayenge
const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
  devTools: true,
});

export default store;

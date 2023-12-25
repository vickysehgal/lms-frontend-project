import { createSlice } from "@reduxjs/toolkit";

// yeh 'AuthSlice' component hmare Authentication purpose ke lie ha

const initialState = {
  // yha agar localStorage me 'isLoggedIn' nhi mila to false kr denge
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  // yha agar localStorage me 'role' ya 'data' nhi mila to role ki value empty kr denge and data me empty object return kr denge respectively
  role: localStorage.getItem("role") || "",
  data: localStorage.getItem("data") || {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;
export default authSlice.reducer;

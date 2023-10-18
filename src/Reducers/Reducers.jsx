import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  name: "",
  email: "",
  token: "",
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    Login: (state, action) => {
      state.token = action.payload;
    },
    Logout: (state, action) => {
      state.token = null;
      toast.success("Signed out Succefully", {
        duration: 3000,
        position: "top-center",
      });
    },
  },
});

export const { Login, Logout } = counterSlice.actions;
export default counterSlice.reducer;

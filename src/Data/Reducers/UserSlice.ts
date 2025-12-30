import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UserData {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
  isLoggedIn: boolean;
}

const initialUserData: UserData = {
  id: 0,
  name: "",
  email: "",
  isAdmin: false,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserData,
  reducers: {
    setUser: (_, action: PayloadAction<UserData>) => action.payload,
    logout: () => initialUserData,
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;

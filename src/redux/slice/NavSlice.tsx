import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface INavState {
  key: string;
  email: string | null;
  steps: number;
}
const initialState: INavState = {
  key: "signin",
  email: null,
  steps: 0,
};

const NavSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setNavKey: (state, action: PayloadAction<string>) => {
      state.key = action.payload;
      console.log(state.key);
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setSteps: (state, action: PayloadAction<number>) => {
      state.steps = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setNavKey, setEmail, setSteps } = NavSlice.actions;

export default NavSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { streamData } from "@/app/page";

interface initialStateProps {
  wallet: streamData[],
}

const initialState: initialStateProps = {
  wallet: []
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    add: (state, action) => {
      state.wallet.push(action.payload);
    },
    remove: (state, action) => {
    state.wallet.filter((item) => item.stream !== action.payload)
    },
  }
});

export const { add, remove } = walletSlice.actions;
export default walletSlice.reducer;
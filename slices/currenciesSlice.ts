import { createSlice } from "@reduxjs/toolkit";
import { requestData } from "@/app/action";

export interface currenciesSlice {
  coll: requestData[],
}

const initialState: currenciesSlice = {
  coll: []
}

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    add: (state, action) => {
      state.coll.push(...action.payload);
    },
  }
});

export const { add } = currenciesSlice.actions;
export default currenciesSlice.reducer;
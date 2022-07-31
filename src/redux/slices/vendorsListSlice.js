import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getVendorsList } from "api/services/index";

export const fetchVendorsListAction = createAsyncThunk(
  "users/fetchByIdStatus",
  async (query) => {
    const response = await getVendorsList(query);
    return response.data.data.finalResult;
  }
);

const initialState = {
  pending: false,
  rejected: { status: false, message: "" },
  vendorsList: [],
};

export const vendorsListSlice = createSlice({
  name: "vendorsList",
  initialState,
  extraReducers: {
    [fetchVendorsListAction.pending]: (state) => {
      return { ...state, pending: true };
    },
    [fetchVendorsListAction.rejected]: (state, action) => {
      return {
        ...state,
        rejected: {
          status: true,
          message: action.payload,
        },
        pending: false,
      };
    },
    [fetchVendorsListAction.fulfilled]: (state, action) => {
      return {
        ...state,
        pending: false,
        vendorsList: [...state.vendorsList, ...action.payload],
      };
    },
  },
});

export default vendorsListSlice.reducer;

import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const getVendorsApi = createAsyncThunk(
  "vendorSlice/getVendorsApi",
  async (rdVendors: string) => {
    let { data } = await axios.get("endpint to list all the Vendor details");
    return data;
  }
);

export const VendorSlice = createSlice({
  name: "vendor",
  initialState: {
    rdVendors: null,
  },
  reducers: {
    saveVendor: (state, action) => {
      state.rdVendors = action.payload;
    },
  },
  extraReducers: {
    [getVendorsApi.pending as any]: (state: any) => {
      console.log("action.payload");
    },
    [getVendorsApi.fulfilled as any]: (state: any, action: any) => {
      state.rdVendors = action.payload.data;
    },
    [getVendorsApi.rejected as any]: (state: any, action: any) => {
      console.log(action.payload);
    },
  },
});

export default VendorSlice.reducer;
const saveVendor = VendorSlice.actions.saveVendor;
export { saveVendor };

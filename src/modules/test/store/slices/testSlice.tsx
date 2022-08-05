import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  testData: null,
  error: null,
  loading: false,
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTestData(state, action: PayloadAction<any>) {
      state.testData = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export default testSlice;

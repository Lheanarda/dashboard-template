import { configureStore } from "@reduxjs/toolkit";
import testSlice from "@src/modules/test/store/slices/testSlice";
import userSlice from "@src/modules/user/store/slices/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    test: testSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

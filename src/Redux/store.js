import { configureStore } from "@reduxjs/toolkit";

import { dataReducer } from "./movieSlice";

const store = configureStore({
  reducer: {
    myStore: dataReducer,

    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  },
});

export default store;

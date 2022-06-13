import { configureStore } from "@reduxjs/toolkit";
import { createAPI } from "../service/api";
import { rootReducer } from "./rootReducer";

const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    }),
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch =typeof store.dispatch;
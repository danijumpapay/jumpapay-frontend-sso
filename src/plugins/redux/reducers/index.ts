import { combineReducers } from "redux";
import userReducer from "@/plugins/redux/reducers/userReducer";

// RTK API
import { authApi } from "@/plugins/redux/rtk/auth";

const rootReducer = combineReducers({
  userReducer,
  [authApi.reducerPath]: authApi.reducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
import { combineReducers } from "redux";
import userReducer from "@/plugins/redux/reducers/userReducer";

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
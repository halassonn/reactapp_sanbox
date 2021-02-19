import { combineReducers } from "redux";
import loadingreducers from "./loading";
const rootReducer = combineReducers({
  loading: loadingreducers
});
export default rootReducer;

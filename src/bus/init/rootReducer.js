import appReducer from "../app/reducers/app";
import { combineReducers } from "redux";

export default combineReducers({
    app: appReducer
});

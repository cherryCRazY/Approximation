import plotReducer from "../plot/reducer";
import { combineReducers } from "redux";

export default combineReducers({
    plot: plotReducer
});

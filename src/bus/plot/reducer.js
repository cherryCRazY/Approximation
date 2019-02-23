// import * as actionTypes from "../actions/actionTypes";
import { Map, List } from "immutable";
import types from "./types";

const initialState = Map({
    points: List()
});

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_POINT: {
            return state.update("points", points =>
                points.push(action.payload)
            );
        }
        default: {
            return state;
        }
    }
};

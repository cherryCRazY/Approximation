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
        case types.CHANGE_POINT: {
            const { x, y, accessKey } = action.payload;

            return state.setIn(["points", accessKey], {
                x,
                y
            });
        }
        case types.DELETE_POINT: {
            const { accessKey } = action.payload;
            return state.update("points", points =>
                points.deleteIn([accessKey])
            );
        }
        default: {
            return state;
        }
    }
};

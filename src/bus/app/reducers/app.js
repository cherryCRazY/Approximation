// import * as actionTypes from "../actions/actionTypes";
import { Map } from "immutable";

const initialState = Map({
    cord: []
});

export default (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};

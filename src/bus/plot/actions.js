import types from "./types";

export const addDot = point => ({
    type: types.ADD_POINT,
    payload: point
});

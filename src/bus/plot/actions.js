import types from "./types";

export const addDot = point => ({
    type: types.ADD_POINT,
    payload: point
});
export const changePoint = point => ({
    type: types.CHANGE_POINT,
    payload: point
});
export const delatePoint = point => ({
    type: types.DELETE_POINT,
    payload: point
});

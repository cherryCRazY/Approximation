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
export const setApproData = service => ({
    type: types.SET_APPRO_DATA,
    payload: service
});
export const setInterData = service => ({
    type: types.SET_INTER_DATA,
    payload: service
});

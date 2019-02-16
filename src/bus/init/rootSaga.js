import { takeEvery, all, call } from "redux-saga/effects";

function* logger() {
    yield takeEvery("*", console.log);
}

export default function* rootSaga() {
    yield all([call(logger)]);
}

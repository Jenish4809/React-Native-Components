import { SET_USERDATA, USER_LIST } from "./constatnt";
import { takeEvery, put } from "redux-saga/effects";

function* userList() {
  const url = "https://dummyjson.com/users/";
  let data = yield fetch(url);
  data = yield data.json();
  yield put({ type: SET_USERDATA, data });
}
function* SagaData() {
  yield takeEvery(USER_LIST, userList);
}

export default SagaData;

import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { GET_INIT_LIST } from "./actionTypes";
import { initListAction } from "./actionCreators";

function* todoSagas() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

function* getInitList() {
  try {
    const res = yield axios.get("https://jsonplaceholder.typicode.com/todos/1");
    const action = initListAction(res.data);
    yield put(action);
  } catch (e) {
    console.log(e.message);
  }
}

export default todoSagas;

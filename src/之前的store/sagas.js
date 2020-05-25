import { takeEvery, put } from 'redux-saga/effects'
import { GET_TODO_LIST } from './actionTypes'
import axios from "axios";
import { initItemAction } from './actionCreators'

function* getToDList() {
  try {
    const res = yield axios.get("/list.json")
    alert('success')
    const action = initItemAction(res.data)
    yield put(action);
  } catch (e) {
    alert('err')
  }

}
function* toDoSagas() {
  yield takeEvery(GET_TODO_LIST, getToDList);
}

export default toDoSagas
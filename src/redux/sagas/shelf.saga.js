import axios from "axios";
import { put, takeEvery, takeLatest } from "redux-saga/effects";
function* fetchShelf(action) {
  try {
    const response = yield axios.get("/api/shelf");
    console.log(response.data);

    yield put({ type: "SET_SHELF", payload: response.data });
  } catch (err) {
    console.log("Error posting to shelf on the elf", err);
  }
}
function* shelfSaga() {
  yield takeEvery("FETCH_SHELF", fetchShelf);
}

export default shelfSaga;

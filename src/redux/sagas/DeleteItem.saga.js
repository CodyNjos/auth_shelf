import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
function* deleteFromShelf(action) {
  try {
    console.log(action.payload);
    const itemToDelete = action.payload.itemId;
    console.log(itemToDelete);
    const response = yield axios.delete(`/api/shelf/delete/${itemToDelete}`);
    yield put({ type: "FETCH_SHELF" });
  } catch (err) {
    console.log("Error deleting from shelf", err);
  }
}

function* deleteFromShelfSaga() {
  yield takeEvery("DELETE_ITEM", deleteFromShelf);
}

export default deleteFromShelfSaga;

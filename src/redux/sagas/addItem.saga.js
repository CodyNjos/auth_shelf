import { put, takeLatest, takeEvery } from "redux-saga/effects";
import axios from "axios";
// function* fetchItems(action) {
//     try {
//         const shelfResponse = yield axios.get('/api/shelf');
//         yield put({ type: 'SET_ITEM', payload: shelfResponse.data});
//     } catch (error) {
//         console.log('error getting items', error)
//     }
// }
function* addItem(action) {
  try {
    yield axios.post(`/api/shelf`, action.payload);
    yield put({ type: "FETCH_SHELF" });
  } catch (error) {
    console.log("error adding item", error);
  }
}

function* addItemSaga() {
  yield takeEvery("ADD_ITEM", addItem);
}
export default addItemSaga;

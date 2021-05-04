import { call, put, takeEvery } from "redux-saga/effects";

const fetchFromAPI = async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = users.json();

  return res;
};

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    const users = yield call(fetchFromAPI);

    yield put({ type: "FETCHED_USERS", payload: users });
  } catch (e) {
    yield put({ type: "FETCHED_ERROR", payload: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("FETCH_USERS", fetchUser);
  // yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
  yield put({ type: "FETCH_USERS" });
}

export default mySaga;

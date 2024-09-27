// Ресурсы:
// formik.org/
// https://react-hook-form.com/
// https://testing-library.com/docs/react-testing-library/intro/
// www.cypress.io/
// https://mobx.js.org/README.html
// https://tanstack.com/

import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchUsersFailure,
  fetchUsersRequest,
  fetchUsersSuccess,
} from "../redux/userReducer";

async function fetchUsersApi() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Something go wrong");
  }
  return await response.json();
}

function* fetchUsers() {
  try {
    const data = yield call(fetchUsersApi);
    yield put(fetchUsersSuccess(data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

function* usersSaga() {
  yield takeEvery(fetchUsersRequest.type, fetchUsers);
}

export default usersSaga;
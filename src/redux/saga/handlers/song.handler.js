import { call, put } from "redux-saga/effects";
import {
  setSong,
  setStatics,
  setGenre,
  setError,
  setMessage,
} from "../../store/slice/song.slice";
import { request } from "../requests/song.requests";

export function* handleGetSong(action) {
  try {
    const song = yield call(request.getSong);
    yield put(setSong(song.data));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* handleGetStatics(action) {
  try {
    const statics = yield call(request.getStatics);
    // console.log(statics.data);

    yield put(setStatics(statics.data));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* handleGetGenre(action) {
  try {
    const genre = yield call(request.getGenre);
    yield put(setGenre(genre.data));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* handleAddSong(action) {
  try {
    const song = yield call(request.addSong, action.payload.data);
    yield put(setMessage(song));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* handleEditSong(action) {
  try {
    const song = yield call(
      request.editSong,
      action.payload.id,
      action.payload.data
    );
    yield put(setMessage(song));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* handleDeleteSong(action) {
  try {
    const song = yield call(request.deleteSong, action.payload.id);
    yield put(setMessage(song));
  } catch (error) {
    yield put(setError(error));
  }
}

import { all, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../actions/units';
import MockUnitsData from "../mock-data/age-of-empires-units.json";

export function* fetchUnits() {
    yield put({
        type: ActionTypes.UNITS_FETCH_SUCCESS,
        payload: MockUnitsData.units,
    });
}

export default function* root() {
   yield all([
       takeLatest(ActionTypes.UNITS_FETCH_REQUEST, fetchUnits),
   ]);
}
import { all, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../actions/units';
import MockUnitsData from "../mock-data/age-of-empires-units.json";

export function* fetchUnits() {
    yield put({
        type: ActionTypes.FETCH_SUCCESS,
        payload: MockUnitsData.units,
    });
}

export function* updateUnitsByFilter() {
    yield put({
        type: ActionTypes.UPDATE_UNITS_BY_FILTERS,
    });
}

export default function* root() {
   yield all([
       takeLatest(ActionTypes.FETCH_REQUEST, fetchUnits),
       takeLatest(ActionTypes.UPDATE_AGE_FILTER, updateUnitsByFilter),
       takeLatest(ActionTypes.UPDATE_COSTS_FILTER, updateUnitsByFilter),
   ]);
}
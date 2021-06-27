import { all, delay, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../actions/units';
import MockUnitsData from "../mock-data/age-of-empires-units.json";

export function* fetchUnits() {
    yield put({
        type: ActionTypes.FETCH_SUCCESS,
        payload: MockUnitsData.units,
    });
}

export function* fetchUnitDetail({ payload }: any) {
    yield delay(1000);

    const findUnit = MockUnitsData.units.find((unit) => unit.id == payload.id);

    if (findUnit) {
        yield put({
            type: ActionTypes.FETCH_DETAIL_SUCCESS,
            payload: findUnit,
        });
    } else {
        yield put({
            type: ActionTypes.FETCH_DETAIL_FAIL,
            payload: {
                message: 'Unit not found!'
            },
        });
    }
}

export function* updateUnitsByFilter() {
    yield put({
        type: ActionTypes.UPDATE_UNITS_BY_FILTERS,
    });
}

export default function* root() {
   yield all([
       takeLatest(ActionTypes.FETCH_REQUEST, fetchUnits),
       takeLatest(ActionTypes.FETCH_DETAIL_REQUEST, fetchUnitDetail),
       takeLatest(ActionTypes.UPDATE_AGE_FILTER, updateUnitsByFilter),
       takeLatest(ActionTypes.UPDATE_COSTS_FILTER, updateUnitsByFilter),
   ]);
}
import { all, fork } from 'redux-saga/effects';
import units from './units';

export default function* root() {
  yield all([fork(units)]);
}
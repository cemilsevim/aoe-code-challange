import { ActionTypes } from '../actions/units';
import { UnitsState } from '../types';

export const unitsState: UnitsState = {
    data: [],
};

export const reducer = (state = unitsState, action: any) => {
    switch (action.type) {
        case ActionTypes.UNITS_FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
            }

        default:
            return state;
    }
};

export default reducer;
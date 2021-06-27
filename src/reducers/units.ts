import { ActionTypes } from '../actions/units';
import { UnitsCostsFilterState, UnitsFiltersState, UnitsState } from '../types';

export const unitsState: UnitsState = {
    data: [],
    filteredData: [],
    filters: {
        age: 'All',
        costs: [
            {
                name: 'Wood',
                value: 0,
                minValue: 0,
                maxValue: 20,
                selected: false,
            },
            {
                name: 'Food',
                value: 0,
                minValue: 0,
                maxValue: 200,
                selected: false,
            },
            {
                name: 'Gold',
                value: 50,
                minValue: 50,
                maxValue: 100,
                selected: false,
            },
        ],
    },
};

export const reducer = (state = unitsState, action: any) => {
    switch (action.type) {
        case ActionTypes.FETCH_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                filteredData: action.payload,
            };
        }

        case ActionTypes.UPDATE_UNITS_BY_FILTERS: {
            let units = state.data;
            const ageFilter = state.filters.age;
            const costFilters = state.filters.costs.filter((cost) => cost.selected);

            if (ageFilter != 'All') {
                units = units.filter((unit) => unit.age == ageFilter);
            }
            
            if (costFilters.length > 0) {
                costFilters.forEach((filter) => {
                    units = units.filter((unit) => unit.cost && unit.cost[filter.name] != undefined && unit.cost[filter.name] <= filter.value)
                });
            }

            return {
                ...state,
                filteredData: units,
            };
        }

        case ActionTypes.UPDATE_AGE_FILTER: {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    age: action.payload,
                }
            };
        }

        case ActionTypes.UPDATE_COSTS_FILTER: {
            let costs = [...state.filters.costs];
            costs = costs.map((cost) => (cost.name == action.payload.name ? action.payload : cost));
            
            return {
                ...state,
                filters: {
                    ...state.filters,
                    costs,
                }
            };
        }

        case ActionTypes.RESET_FILTERS: {
            return {
                ...state,
                filters: {...unitsState.filters},
            };
        }

        default:
            return state;
    }
};

export default reducer;
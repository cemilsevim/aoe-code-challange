import { Unit } from "./unit";

export interface UnitsCostsFilterState {
    name: string,
    value: number,
    selected: boolean,
    minValue: number,
    maxValue: number,
}
export interface UnitsFiltersState {
    age: string,
    costs: UnitsCostsFilterState[],
}

export interface UnitsState {
    detail: {
        requested: boolean;
        errorMessage?: string;
        data?: Unit,
    },
    data: Unit[],
    filteredData: Unit[],
    filters: UnitsFiltersState,
}

export interface StoreState {
    units: UnitsState;
}
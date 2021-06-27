import { Unit } from "./unit";

export interface UnitsState {
    data: Unit[]
}

export interface StoreState {
    units: UnitsState;
}
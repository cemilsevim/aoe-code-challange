import React from "react";
import { useEffect } from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import ContentContainer from "../../components/ContentContainer";
import PageTitle from "../../components/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import * as UnitAction from "../../actions/units";
import UnitsTable from "../../components/UnitsTable";
import { StoreState, UnitsCostsFilterState } from "../../types";


function Units(props: any): JSX.Element {
    const dispatch = useDispatch();
    const units = useSelector((state: StoreState) => state.units);
    const unitsFilteredData = units.filteredData;
    const filters = units.filters;
    
    // fetch units
    useEffect(function() {
        // reset filter
        dispatch({
            type: UnitAction.ActionTypes.RESET_FILTERS,
        });

        // fetch units
        dispatch({
            type: UnitAction.ActionTypes.FETCH_REQUEST,
        });
    }, []);

    const filterEvents = {
        ages: {
            onClick: function(age: string) {
                dispatch({
                    type: UnitAction.ActionTypes.UPDATE_AGE_FILTER,
                    payload: age,
                });
            },
        },
        costs: {
            onChangeCheckbox: function(cost: UnitsCostsFilterState, event: any) {
                dispatch({
                    type: UnitAction.ActionTypes.UPDATE_COSTS_FILTER,
                    payload: {
                        ...cost,
                        selected: event.target.checked,
                    },
                });
            },
            onChangeSlide: function(cost: UnitsCostsFilterState, event: any) {
                dispatch({
                    type: UnitAction.ActionTypes.UPDATE_COSTS_FILTER,
                    payload: {
                        ...cost,
                        value: event.target.value,
                    },
                });
            },
        },
    };

    return (
        <ContentContainer>
            <PageTitle>Units</PageTitle>
            <div className="filters">
                <div className="ages-filter">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Ages</Form.Label>
                        <Form.Row className="ages-filter-options">
                            <ButtonGroup aria-label="Basic example">
                                {
                                    ['All', 'Dark', 'Feudal', 'Castle', 'Imperial'].map((age, key) => (<Button variant={filters.age === age ? 'primary' : 'secondary'} key={key} onClick={() => filterEvents.ages.onClick(age)}>{age}</Button>))
                                }
                            </ButtonGroup>
                        </Form.Row>
                    </Form.Group>
                </div>

                <div className="costs-filter my-5">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Costs</Form.Label>
                        <Form.Row className="costs-filter-options">
                            {
                                filters.costs.map((cost, key) => (
                                    <Form.Row key={key} className="d-flex align-items-center">
                                        <Form.Check checked={cost.selected} onChange={(event) => filterEvents.costs.onChangeCheckbox(cost, event)} id={cost.name+'-check'} label={cost.name} type="checkbox" className="col-1"/>
                                        <Form.Control min={cost.minValue} max={cost.maxValue} value={cost.value} onChange={(event) => filterEvents.costs.onChangeSlide(cost, event)} className="col-2" type="range"/>
                                        <Form.Text className="px-2">{cost.value}</Form.Text>
                                    </Form.Row>
                                ))
                            }
                        </Form.Row>
                    </Form.Group>
                </div>
            </div>
            <UnitsTable units={unitsFilteredData}/>
        </ContentContainer>
    );
}

export default Units;
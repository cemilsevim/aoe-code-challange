import React from "react";
import { useEffect } from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import ContentContainer from "../../components/ContentContainer";
import PageTitle from "../../components/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import * as UnitAction from "../../actions/units";
import UnitsTable from "../../components/UnitsTable";
import { StoreState } from "../../types";


function Units(props: any): JSX.Element {
    const dispatch = useDispatch();
    const units = useSelector((state: StoreState) => state.units.data);
    
    // fetch units
    useEffect(function() {
        dispatch({
            type: UnitAction.ActionTypes.UNITS_FETCH_REQUEST,
        })
    }, []);

    return (
        <ContentContainer>
            <PageTitle>Units</PageTitle>
            <div className="filters">
                <div className="ages-filter">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Ages</Form.Label>
                        <Form.Row className="ages-filter-options">
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="primary">All</Button>
                                <Button variant="secondary">Dark</Button>
                                <Button variant="secondary">Feudal</Button>
                                <Button variant="secondary">Castle</Button>
                                <Button variant="secondary">Imperial</Button>
                            </ButtonGroup>
                        </Form.Row>
                    </Form.Group>
                </div>

                <div className="costs-filter my-5">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Costs</Form.Label>
                        <Form.Row className="costs-filter-options">
                            <Form.Row className="d-flex align-items-center">
                                <Form.Check id="wood-check" label="Wood" type="checkbox" className="col-1"/>
                                <Form.Control className="col-2" type="range"/>
                                <Form.Text className="px-2">0</Form.Text>
                            </Form.Row>
                            <Form.Row className="d-flex align-items-center">
                                <Form.Check id="food-check" label="Food" type="checkbox" className="col-1"/>
                                <Form.Control className="col-2" type="range"/>
                                <Form.Text className="px-2">0</Form.Text>
                            </Form.Row>
                            <Form.Row className="d-flex align-items-center">
                                <Form.Check id="gold-check" label="Gold" type="checkbox" className="col-1"/>
                                <Form.Control className="col-2" type="range"/>
                                <Form.Text className="px-2">0</Form.Text>
                            </Form.Row>
                        </Form.Row>
                    </Form.Group>
                </div>
            </div>
            <UnitsTable units={units}/>
        </ContentContainer>
    );
}

export default Units;
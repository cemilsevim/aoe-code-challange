import React from "react";
import { Table } from "react-bootstrap";
import { Unit } from "../types/unit";

function UnitsTable(props: any): JSX.Element {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>costs</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.units && props.units.map((unit: Unit, key: number) => (
                        <tr key={key} onClick={() => props.onClickRow(unit)}>
                            <td>{unit.id}</td>
                            <td>{unit.name}</td>
                            <td>{unit.age}</td>
                            <td>
                                { unit.cost != null && Object.keys(unit.cost).map((costName, costKey: number) => (
                                    <span key={costKey}>
                                        {costName}: {unit.cost[costName]}
                                        {costKey < Object.keys(unit.cost).length-1 ? ', ' : ''}
                                    </span>
                                )) }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    );
}

export default UnitsTable;
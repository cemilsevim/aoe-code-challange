import React from "react";
import { useEffect } from "react";
import { Card, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ContentContainer from "../../components/ContentContainer";
import { StoreState } from "../../types";
import * as UnitAction from "../../actions/units";

function UnitsDetail(props: any): JSX.Element {
    const dispatch = useDispatch();
    const unitDetail = useSelector((state: StoreState) => state.units.detail);

    useEffect(function() {
        dispatch({
            type: UnitAction.ActionTypes.FETCH_DETAIL_REQUEST,
            payload: {
                id: props.match.params.unit_id,
            },
        });
    }, []);
    
    return (
        <ContentContainer>
            {
                !unitDetail.requested 
                ?
                    <div className="d-flex justify-content-center align-items-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                :
                    unitDetail.errorMessage != null
                    ?
                        <Alert variant={'danger'}>
                            {unitDetail.errorMessage}
                        </Alert>
                    :
                        <Card>
                            <Card.Img variant="top" src={`https://via.placeholder.com/1300x250.png?text=${unitDetail.data?.name}`} />
                            <Card.Body>
                                <React.Fragment>
                                    <Card.Title>ID</Card.Title>
                                    <Card.Text> {unitDetail.data?.id} </Card.Text>
                                </React.Fragment>
                                <React.Fragment>
                                    <Card.Title>Name</Card.Title>
                                    <Card.Text> {unitDetail.data?.name} </Card.Text>
                                </React.Fragment>
                                <React.Fragment>
                                    <Card.Title>Description</Card.Title>
                                    <Card.Text> {unitDetail.data?.description} </Card.Text>
                                </React.Fragment>
                                <React.Fragment>
                                    <Card.Title>Min. Required Age</Card.Title>
                                    <Card.Text> {unitDetail.data?.age} </Card.Text>
                                </React.Fragment>
                                {
                                    Object.keys((unitDetail.data as any).cost).map((cost_name, key) => (
                                    <React.Fragment key={key}>
                                        <Card.Title>{cost_name} Cost</Card.Title>
                                        <Card.Text> {unitDetail.data?.cost[cost_name]} </Card.Text>
                                    </React.Fragment>
                                    ))
                                }
                                <React.Fragment>
                                    <Card.Title>Build Time</Card.Title>
                                    <Card.Text> {unitDetail.data?.build_time} </Card.Text>
                                </React.Fragment>
                                <React.Fragment>
                                    <Card.Title>Reload Time</Card.Title>
                                    <Card.Text> {unitDetail.data?.reload_time} </Card.Text>
                                </React.Fragment>
                                <React.Fragment>
                                    <Card.Title>Hit Points</Card.Title>
                                    <Card.Text> {unitDetail.data?.hit_points} </Card.Text>
                                </React.Fragment>
                                <React.Fragment>
                                    <Card.Title>Attack</Card.Title>
                                    <Card.Text> {unitDetail.data?.attack} </Card.Text>
                                </React.Fragment>
                                <React.Fragment>
                                    <Card.Title>Accuracy</Card.Title>
                                    <Card.Text> {unitDetail.data?.accuracy} </Card.Text>
                                </React.Fragment>
                            </Card.Body>
                        </Card>
            }
            
        </ContentContainer>
    );
}

export default UnitsDetail;
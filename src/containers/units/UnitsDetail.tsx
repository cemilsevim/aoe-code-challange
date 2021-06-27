import React from "react";
import { Card } from "react-bootstrap";
import ContentContainer from "../../components/ContentContainer";

function UnitsDetail(): JSX.Element {
    const columns = ['ID', 'Name', 'Description', 'Min. Required Age', 'Wood Cost', 'Food Cost', 'Gold Cost', 'Build Time', 'Reload Time', 'Hit Points', 'Attack', 'Accuracy'];
    return (
        <ContentContainer>
            <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/1300x250.png?text=Unit" />
                <Card.Body>
                    {
                        columns.map((column, key) => 
                            <React.Fragment key={key}>
                                <Card.Title>{column}</Card.Title>
                                <Card.Text>
                                    1
                                </Card.Text>
                            </React.Fragment>
                        )
                    }
                </Card.Body>
            </Card>
        </ContentContainer>
    );
}

export default UnitsDetail;
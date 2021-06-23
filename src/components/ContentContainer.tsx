import React from "react";
import { Container } from "react-bootstrap";

function ContentContainer({ children }: any): JSX.Element {
    return (
        <Container className="mt-5 content-container">
            { children }
        </Container>
    );
}

export default ContentContainer;
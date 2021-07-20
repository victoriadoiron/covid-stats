import React, { FunctionComponent } from 'react';
import { Card, Spinner } from 'react-bootstrap';

export const LoadingView: FunctionComponent = () => {
    return (
        <div className="container mt-5">
            <Card className="text-center">
                <Card.Body className="mt-5">
                    <p className="h5">Just a moment please</p>
                </Card.Body>
                <Spinner animation="border" role="status" className="align-self-center mb-5">
                    <span className="sr-only">Loading</span>
                </Spinner>
            </Card>
        </div>
    );
};

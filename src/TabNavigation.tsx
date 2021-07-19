import React, { FunctionComponent } from 'react';
import { Nav } from 'react-bootstrap';

interface Props {
    handleTabSelect: (eventId: DATA_VIEW) => void;
}

// eslint-disable-next-line no-shadow
export enum DATA_VIEW {
    TABLE = 'table',
    CHART = 'chart',
}

export const TabNavigation: FunctionComponent<Props> = ({ handleTabSelect }) => {
    return (
        <Nav variant="tabs" defaultActiveKey={DATA_VIEW.TABLE}>
            <Nav.Item>
                <Nav.Link
                    eventKey={DATA_VIEW.TABLE}
                    onSelect={(eventId) => handleTabSelect(eventId as DATA_VIEW)}
                >
                    Table
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    eventKey={DATA_VIEW.CHART}
                    onSelect={(eventId) => handleTabSelect(eventId as DATA_VIEW)}
                >
                    Chart
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

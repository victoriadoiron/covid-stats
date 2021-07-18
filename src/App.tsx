import React, { FunctionComponent } from 'react';
import { Col } from 'react-bootstrap';
import { CountryList } from './summary-table/CountryList';
import { SearchBar } from './search-bar/SearchBar';

export const App: FunctionComponent = () => {
    return (
        <div className="mt-5 ml-5 mr-5">
            <div className="row">
                <Col>
                    <h1 className="h5">COVID-19 Statistics</h1>
                </Col>
                <SearchBar />
            </div>
            <CountryList />
        </div>
    );
};

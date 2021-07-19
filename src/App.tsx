import React, { FunctionComponent, useCallback, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { CountryList } from './summary-table/CountryList';
import { SearchBar } from './search-bar/SearchBar';
import { useCountrySummaries } from './useCountrySummaries';
import { SummaryChart } from './summary-chart/SummaryChart';
import { DATA_VIEW, TabNavigation } from './TabNavigation';

export const App: FunctionComponent = () => {
    const { handleSearch, handleSelect, summary, pending } = useCountrySummaries();
    const [activeDataView, setActiveDataView] = useState(DATA_VIEW.TABLE);

    const handleTabSelect = useCallback((viewId: DATA_VIEW | null) => {
        setActiveDataView(viewId || DATA_VIEW.TABLE);
    }, []);

    return (
        <div className="mt-5 ml-5 mr-5">
            <h1 className="h5">COVID-19 Statistics</h1>
            <Row>
                <Col>
                    <TabNavigation handleTabSelect={handleTabSelect} />
                </Col>
                <SearchBar handleSearch={handleSearch} handleSelect={handleSelect} />
            </Row>
            {activeDataView === DATA_VIEW.TABLE && !!summary?.countries && (
                <CountryList countrySummaries={summary.countries} globalSummary={summary.global} />
            )}
            {activeDataView === DATA_VIEW.CHART && !!summary?.countries && (
                <SummaryChart countrySummaries={summary.countries} />
            )}
        </div>
    );
};

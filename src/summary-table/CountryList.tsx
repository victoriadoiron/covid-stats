import React, { FunctionComponent } from 'react';
import { Table } from 'react-bootstrap';
import { CountryListItem } from './CountryListItem';
import { GlobalSummary } from './GlobalSummary';
import { CountrySummary } from '../api-services/getSummaries';

const MOCK_GLOBAL_SUMMARY = {
    TotalConfirmed: 123456,
    TotalRecovered: 9876,
    TotalDeaths: 1200,
    NewDeaths: 0,
    NewConfirmed: 0,
    NewRecovered: 0,
};

interface Props {
    countrySummaries: CountrySummary[];
}

export const CountryList: FunctionComponent<Props> = ({ countrySummaries }) => {
    return (
        <Table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Country</th>
                    <th scope="col">Total Confirmed Cases</th>
                    <th scope="col">Total Recovered</th>
                    <th scope="col">Total Deaths</th>
                </tr>
            </thead>
            <tbody>
                {countrySummaries.map((countrySummary) => (
                    <CountryListItem key={countrySummary.ID} countrySummary={countrySummary} />
                ))}
                <GlobalSummary globalSummary={MOCK_GLOBAL_SUMMARY} />
            </tbody>
        </Table>
    );
};

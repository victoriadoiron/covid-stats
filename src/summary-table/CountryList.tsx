import React, { FunctionComponent } from 'react';
import { Table } from 'react-bootstrap';
import { CountryListItem } from './CountryListItem';
import { GlobalSummary } from './GlobalSummary';
import { CountrySummary, Summary } from '../api-services/getSummaries';

interface Props {
    countrySummaries: CountrySummary[];
    globalSummary: Summary;
}

export const CountryList: FunctionComponent<Props> = ({ countrySummaries, globalSummary }) => {
    return (
        <Table className="table mt-2">
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
                <GlobalSummary globalSummary={globalSummary} />
            </tbody>
        </Table>
    );
};

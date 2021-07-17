import React, { FunctionComponent } from 'react';
import { CountryListItem } from './CountryListItem';

const MOCK_COUNTRIES_LIST = [
    {
        Country: 'Afghanistan',
        CountryCode: 'AF',
        Date: '2021-07-17T09:57:06.705Z',
        ID: '2a2683fe-7a4c-4a3e-91ba-a15f092cceb1',
        NewConfirmed: 0,
        NewDeaths: 0,
        NewRecovered: 0,
        Premium: {},
        Slug: 'afghanistan',
        TotalConfirmed: 137853,
        TotalDeaths: 5983,
        TotalRecovered: 82586,
    },
    {
        Country: 'Austria',
        CountryCode: 'AT',
        Date: '2021-07-17T09:57:06.705Z',
        ID: '3c961698-7be8-4572-be1e-9de0e545f171',
        NewConfirmed: 0,
        NewDeaths: 0,
        NewRecovered: 0,
        Premium: {},
        Slug: 'austria',
        TotalConfirmed: 653001,
        TotalDeaths: 10728,
        TotalRecovered: 639352,
    },
];

export const CountryList: FunctionComponent = () => {
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Country</th>
                    <th scope="col">Total Confirmed Cases</th>
                    <th scope="col">Total Recovered</th>
                    <th scope="col">Total Deaths</th>
                </tr>
            </thead>
            <tbody>
                {MOCK_COUNTRIES_LIST.map((countrySummary) => (
                    <CountryListItem key={countrySummary.ID} countrySummary={countrySummary} />
                ))}
            </tbody>
        </table>
    );
};
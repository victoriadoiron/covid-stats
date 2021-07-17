import React, { FunctionComponent } from 'react';
import { CountrySummary } from '../api-services/getSummaries';

interface Props {
    countrySummary: CountrySummary;
}

export const CountryListItem: FunctionComponent<Props> = ({ countrySummary }) => {
    const { Country, Slug, TotalConfirmed, TotalRecovered, TotalDeaths } = countrySummary;
    const countryName = Country || Slug;
    return (
        <>
            <div>Country name: {countryName}</div>
            <div>Total Confirmed Cases: {TotalConfirmed} </div>
            <div>Total Recovered Cases: {TotalRecovered} </div>
            <div>Total Deaths: {TotalDeaths} </div>
        </>
    );
};

import React, { FunctionComponent } from 'react';
import { CountrySummary } from '../api-services/getSummaries';

interface Props {
    countrySummary: CountrySummary;
}

export const CountryListItem: FunctionComponent<Props> = ({ countrySummary }) => {
    const { Country, Slug, TotalConfirmed, TotalRecovered, TotalDeaths } = countrySummary;
    const countryName = Country || Slug;
    return (
        <tr>
            <th scope="row">{countryName}</th>
            <td>{TotalConfirmed}</td>
            <td>{TotalRecovered}</td>
            <td>{TotalDeaths}</td>
        </tr>
    );
};

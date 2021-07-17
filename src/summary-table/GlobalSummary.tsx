import React, { FunctionComponent } from 'react';
import { Summary } from '../api-services/getSummaries';

interface Props {
    globalSummary: Summary;
}

export const GlobalSummary: FunctionComponent<Props> = ({ globalSummary }) => {
    const { TotalConfirmed, TotalRecovered, TotalDeaths } = globalSummary;
    return (
        <tr className="table-active">
            <th scope="row" className="font-weight-bold">
                GLOBAL
            </th>
            <td>{TotalConfirmed}</td>
            <td>{TotalRecovered}</td>
            <td>{TotalDeaths}</td>
        </tr>
    );
};

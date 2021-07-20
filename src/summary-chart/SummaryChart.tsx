import React, { FunctionComponent } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { CountrySummary } from '../api-services/getSummaries';

interface Props {
    countrySummaries: CountrySummary[];
}

// eslint-disable-next-line no-shadow
export enum CHART_LABEL {
    TOTAL_CONFIRMED = 'Total Confirmed',
    TOTAL_RECOVERED = 'Total Recovered',
    TOTAL_DEATHS = 'Total Deaths',
}

export const SummaryChart: FunctionComponent<Props> = ({ countrySummaries }) => {
    return (
        <div className="min-vh-100">
            <ResponsiveContainer height={900}>
                <BarChart
                    data={countrySummaries}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Country" name="Country" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey="TotalConfirmed"
                        fill="#8884d8"
                        name={CHART_LABEL.TOTAL_CONFIRMED}
                    />
                    <Bar
                        dataKey="TotalRecovered"
                        fill="#82ca9d"
                        name={CHART_LABEL.TOTAL_RECOVERED}
                    />
                    <Bar dataKey="TotalDeaths" fill="#ffc658" name={CHART_LABEL.TOTAL_DEATHS} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

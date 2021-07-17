import axios from 'axios';

interface Summary {
    NewConfirmed: number;
    NewRecovered: number;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
}
interface CountrySummary extends Summary {
    Country: string;
    CountryCode: string;
}

interface SummaryResponse {
    Global: Summary;
    Countries?: CountrySummary[];
}

const summaryUrl = 'https://api.covid19api.com/summary';

export const getSummaries = async (): Promise<SummaryResponse> => {
    const { data } = await axios.get(summaryUrl);
    return data;
};
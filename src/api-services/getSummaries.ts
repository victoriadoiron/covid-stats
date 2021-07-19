import axios from 'axios';

export interface Summary {
    NewConfirmed: number;
    NewRecovered: number;
    NewDeaths: number;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
}
export interface CountrySummary extends Summary {
    Country: string;
    CountryCode: string;
    Slug: string;
    ID: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Premium: any;
    Date: string;
}

interface SummaryResponse {
    Global: Summary;
    Countries?: CountrySummary[];
}

const summaryUrl = 'https://api.covid19api.com/summary';

export const MOCK_COUNTRIES_LIST = [
    {
        Country: 'Afghanistan',
        CountryCode: 'AF',
        Date: '2021-07-17T09:57:06.705Z',
        ID: '2a2683fe-7a4c-4a3e-91ba-a15f092cceb2',
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
        ID: '3c961698-7be8-4572-be1e-9de0e545f174',
        NewConfirmed: 0,
        NewDeaths: 0,
        NewRecovered: 0,
        Premium: {},
        Slug: 'austria',
        TotalConfirmed: 653001,
        TotalDeaths: 10728,
        TotalRecovered: 639352,
    },
    {
        Country: 'Australia',
        CountryCode: 'AU',
        Date: '2021-07-17T09:57:06.705Z',
        ID: '37be8-7be87be8-4572-be1e-2a2683fef',
        NewConfirmed: 0,
        NewDeaths: 0,
        NewRecovered: 0,
        Premium: {},
        Slug: 'australia',
        TotalConfirmed: 853001,
        TotalDeaths: 12721,
        TotalRecovered: 739752,
    },
    {
        Country: 'Belgium',
        CountryCode: 'BG',
        Date: '2021-07-17T09:57:06.705Z',
        ID: '6e961697-7ve8-4272-cd1e-7ef70e545f127',
        NewConfirmed: 0,
        NewDeaths: 0,
        NewRecovered: 0,
        Premium: {},
        Slug: 'belgium',
        TotalConfirmed: 222001,
        TotalDeaths: 728,
        TotalRecovered: 43211,
    },
    {
        Country: 'Canada',
        CountryCode: 'CA',
        Date: '2021-07-17T09:57:06.705Z',
        ID: '7r161697-6a4c-6272-cd1e-7ef70e545g922',
        NewConfirmed: 0,
        NewDeaths: 0,
        NewRecovered: 0,
        Premium: {},
        Slug: 'canada',
        TotalConfirmed: 132001,
        TotalDeaths: 423,
        TotalRecovered: 55211,
    },
    {
        Country: 'Denmark',
        CountryCode: 'DK',
        Date: '2021-07-17T09:57:06.705Z',
        ID: '5k2683fe-7a4c-4a3e-91ba-a15f092vceb3',
        NewConfirmed: 0,
        NewDeaths: 0,
        NewRecovered: 0,
        Premium: {},
        Slug: 'denmark',
        TotalConfirmed: 52001,
        TotalDeaths: 231,
        TotalRecovered: 4217,
    },
    {
        Country: 'Estonia',
        CountryCode: 'EE',
        Date: '2021-07-17T09:57:06.705Z',
        ID: '1l4683fe-7a4c-4a3e-91ba-a15f092sk8d4',
        NewConfirmed: 0,
        NewDeaths: 0,
        NewRecovered: 0,
        Premium: {},
        Slug: 'estonia',
        TotalConfirmed: 500,
        TotalDeaths: 36,
        TotalRecovered: 418,
    },
    {
        Country: 'Gibraltar',
        CountryCode: 'GI',
        Date: '2021-07-17T09:57:06.705Z',
        ID: '9kj183fe-7a4c-4a3e-91ba-a15f092jhzi9',
        NewConfirmed: 0,
        NewDeaths: 0,
        NewRecovered: 0,
        Premium: {},
        Slug: 'gibraltar',
        TotalConfirmed: 100,
        TotalDeaths: 6,
        TotalRecovered: 87,
    },
    {
        Country: 'Japan',
        CountryCode: 'JP',
        Date: '2021-07-17T09:57:06.705Z',
        ID: 'a15f092-7a4c-4a3e-91ba-9kj18ffe',
        NewConfirmed: 0,
        NewDeaths: 0,
        NewRecovered: 0,
        Premium: {},
        Slug: 'japan',
        TotalConfirmed: 98800,
        TotalDeaths: 2344,
        TotalRecovered: 87668,
    },
    {
        Country: 'Morocco',
        CountryCode: 'MR',
        Date: '2021-07-17T09:57:06.705Z',
        ID: 'a15f092jhdi9-7a4c-4a3e-91ba-9k7183fe',
        NewConfirmed: 0,
        NewDeaths: 0,
        NewRecovered: 0,
        Premium: {},
        Slug: 'morocco',
        TotalConfirmed: 54300,
        TotalDeaths: 543,
        TotalRecovered: 32222,
    },
    {
        Country: 'Macedonia',
        CountryCode: 'MC',
        Date: '2021-07-17T09:57:06.705Z',
        ID: '7ef70e54-7a4c-4a3e-91ba-5k26j88fe',
        NewConfirmed: 0,
        NewDeaths: 0,
        NewRecovered: 0,
        Premium: {},
        Slug: 'macedonia',
        TotalConfirmed: 44300,
        TotalDeaths: 211,
        TotalRecovered: 38272,
    },
    {
        Country: 'Maldives',
        CountryCode: 'MA',
        Date: '2021-07-17T09:57:06.705Z',
        ID: '88ba91ba-7a4c-4a3hse-91ba-7efs7sj762',
        NewConfirmed: 0,
        NewDeaths: 0,
        NewRecovered: 0,
        Premium: {},
        Slug: 'maldives',
        TotalConfirmed: 300,
        TotalDeaths: 20,
        TotalRecovered: 222,
    },
    {
        Country: 'Norway',
        CountryCode: 'MA',
        Date: '2021-07-17T09:57:06.705Z',
        ID: '91ha91ba-7a4c-4a3hse-91ba-7ef876hds9',
        NewConfirmed: 0,
        NewDeaths: 0,
        NewRecovered: 0,
        Premium: {},
        Slug: 'norway',
        TotalConfirmed: 300,
        TotalDeaths: 20,
        TotalRecovered: 222,
    },
    {
        Country: 'New Zealand',
        CountryCode: 'NZ',
        Date: '2021-07-17T09:57:06.705Z',
        ID: '91ba91ba-7a4c-4a3hse-91ba-7ef765e54',
        NewConfirmed: 0,
        NewDeaths: 0,
        NewRecovered: 0,
        Premium: {},
        Slug: 'new zealand',
        TotalConfirmed: 300,
        TotalDeaths: 20,
        TotalRecovered: 222,
    },
    {
        Country: 'Turkey',
        CountryCode: 'TU',
        Date: '2021-07-17T09:57:06.705Z',
        ID: '4a3hse-91ba91ba91ba-7a4c-715298h87',
        NewConfirmed: 0,
        NewDeaths: 0,
        NewRecovered: 0,
        Premium: {},
        Slug: 'turkey',
        TotalConfirmed: 223400,
        TotalDeaths: 322,
        TotalRecovered: 198777,
    },
];

export const getSummaries = async (): Promise<SummaryResponse> => {
    const { data } = await axios.get(summaryUrl);
    return data;
};

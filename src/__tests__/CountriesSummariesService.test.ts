import { searchTermMatchesCountry } from '../CountrySummariesService';

const COUNTRY_SUMMARY_MOCK = {
    Country: 'Austria',
    CountryCode: 'AT',
    Date: '2021-07-17T09:57:06.705Z',
    ID: '3c961698-7be8-4572-be1e-9de0e545f171',
    NewConfirmed: 0,
    NewDeaths: 0,
    NewRecovered: 0,
    Premium: {},
    Slug: 'slug',
    TotalConfirmed: 653001,
    TotalDeaths: 10728,
    TotalRecovered: 639352,
};

describe('CountriesSummariesService', () => {
    describe('searchTermMatchesCountry', () => {
        it('returns true when whole search term matches the beginning of comparator', () => {
            const searchTerm = 'Aus';

            const actual = searchTermMatchesCountry(searchTerm)(COUNTRY_SUMMARY_MOCK);

            expect(actual).toBe(true);
        });

        it('returns true when whole search term is a partial match of comparator', () => {
            const searchTerm = 'stri';

            const actual = searchTermMatchesCountry(searchTerm)(COUNTRY_SUMMARY_MOCK);

            expect(actual).toBe(true);
        });

        it('returns false when search term does not have any match in comparator', () => {
            const searchTerm = 'canada';

            const actual = searchTermMatchesCountry(searchTerm)(COUNTRY_SUMMARY_MOCK);

            expect(actual).toBe(false);
        });

        it('returns false when part of search term is found in comparator but not whole search term', () => {
            const searchTerm = 'austriaaaaaa';

            const actual = searchTermMatchesCountry(searchTerm)(COUNTRY_SUMMARY_MOCK);

            expect(actual).toBe(false);
        });

        it('ignores whitespaces returning true for matches', () => {
            const searchTerm = 'austria   ';

            const actual = searchTermMatchesCountry(searchTerm)(COUNTRY_SUMMARY_MOCK);

            expect(actual).toBe(true);
        });

        it('is cases insensitive and returns true for matches', () => {
            const searchTerm = 'AUSTRIA';

            const actual = searchTermMatchesCountry(searchTerm)(COUNTRY_SUMMARY_MOCK);

            expect(actual).toBe(true);
        });

        it('returns true for country code matches', () => {
            const searchTerm = 'AT';

            const actual = searchTermMatchesCountry(searchTerm)(COUNTRY_SUMMARY_MOCK);

            expect(actual).toBe(true);
        });

        it('returns true for slug matches', () => {
            const searchTerm = 'slug';

            const actual = searchTermMatchesCountry(searchTerm)(COUNTRY_SUMMARY_MOCK);

            expect(actual).toBe(true);
        });
    });
});

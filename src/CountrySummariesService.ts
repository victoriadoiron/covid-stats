import { CountrySummary } from './api-services/getSummaries';

export const searchTermMatchesCountry =
    (searchTerm: string) =>
    ({ Country, CountryCode, Slug }: CountrySummary): boolean => {
        const regex = new RegExp(searchTerm.trim(), 'i');
        return !!Country.match(regex) || !!Slug.match(regex) || !!CountryCode.match(regex);
    };

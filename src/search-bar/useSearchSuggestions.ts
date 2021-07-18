import { useCallback, useState } from 'react';
import { CountrySummary, MOCK_COUNTRIES_LIST } from '../api-services/getSummaries';
import { searchTermMatchesCountry } from '../CountrySummariesService';

interface SearchSuggestionsState {
    searchSuggestions: CountrySummary[];
    handleFilter: (searchTerm: string) => void;
}

export const useSearchSuggestions = (): SearchSuggestionsState => {
    const [searchSuggestions, setSearchSuggestions] = useState(MOCK_COUNTRIES_LIST);

    const handleFilter = useCallback((searchTerm: string) => {
        const result = MOCK_COUNTRIES_LIST.filter(searchTermMatchesCountry(searchTerm));
        setSearchSuggestions(result);
    }, []);

    return {
        searchSuggestions,
        handleFilter,
    };
};

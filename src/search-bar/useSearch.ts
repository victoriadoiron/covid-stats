import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useSearchSuggestions } from './useSearchSuggestions';
import { CountrySummary } from '../api-services/getSummaries';

export const useSearch = (
    handleSearch: (searchTerm: string) => void,
    handleSelect: (selectedSuggestion: CountrySummary) => void,
) => {
    const [keyword, setKeyword] = useState('');
    const { searchSuggestions, handleFilter } = useSearchSuggestions();

    useEffect(() => {
        handleFilter(keyword);
    }, [keyword, handleFilter]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setKeyword(value);
    };

    const onSearch = useCallback(() => {
        handleSearch(keyword);
    }, [handleSearch, keyword]);

    const onSelect = useCallback(
        (countryId: string | null) => {
            const selectedSuggestion = searchSuggestions.find(
                (suggestion) => suggestion.ID === countryId,
            );

            if (!selectedSuggestion) {
                return;
            }

            setKeyword(selectedSuggestion.Country);
            handleSelect(selectedSuggestion);
        },
        [searchSuggestions, handleSelect],
    );

    return {
        keyword,
        handleChange,
        onSearch,
        onSelect,
        searchSuggestions,
    };
};

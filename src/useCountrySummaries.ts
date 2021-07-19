import { useCallback, useEffect, useState } from 'react';
import { searchTermMatchesCountry } from './CountrySummariesService';
import {
    CountrySummary,
    getSummaries,
    Summary,
    SummaryResponse,
} from './api-services/getSummaries';

interface CountrySummariesState {
    filteredCountries?: CountrySummary[];
    handleSearch: (searchTerm?: string) => void;
    handleSelect: (suggestion: CountrySummary) => void;
    global?: Summary;
    pending: boolean;
}

export const useCountrySummaries = (): CountrySummariesState => {
    const [summary, setSummary] = useState<SummaryResponse>();
    const [pending, setPending] = useState(false);
    const [errors, setErrors] = useState(false);
    const [filteredCountries, setFilteredCountries] = useState<CountrySummary[]>();

    useEffect(() => {
        setPending(true);
        (async () => {
            try {
                const response = await getSummaries();
                setSummary(response);
                setFilteredCountries(response.countries);
            } catch (e) {
                setErrors(true);
            } finally {
                setPending(false);
            }
        })();
    }, []);

    const handleResetSummaryData = useCallback(() => {
        setFilteredCountries(summary?.countries);
    }, [summary?.countries]);

    const handleSearch = useCallback(
        (searchTerm?: string) => {
            if (!searchTerm) {
                handleResetSummaryData();
                return;
            }

            const result = summary?.countries?.filter(searchTermMatchesCountry(searchTerm));

            setFilteredCountries(result);
        },
        [summary?.countries, handleResetSummaryData],
    );

    const handleSelect = useCallback((suggestion: CountrySummary) => {
        setFilteredCountries([suggestion]);
    }, []);

    return {
        filteredCountries,
        handleSearch,
        handleSelect,
        global: summary?.global,
        pending,
    };
};

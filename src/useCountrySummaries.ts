import { useCallback, useEffect, useState } from 'react';
import { searchTermMatchesCountry } from './CountrySummariesService';
import {
    CountrySummary,
    getSummaries,
    MOCK_COUNTRIES_LIST,
    SummaryResponse,
} from './api-services/getSummaries';

interface CountrySummariesState {
    handleSearch: (searchTerm?: string) => void;
    handleSelect: (suggestion: CountrySummary) => void;
    summary?: SummaryResponse;
    pending: boolean;
}

export const useCountrySummaries = (): CountrySummariesState => {
    const [summaryData, setSummaryData] = useState(MOCK_COUNTRIES_LIST);
    const [summary, setSummary] = useState<SummaryResponse>();
    const [pending, setPending] = useState(false);
    const [errors, setErrors] = useState(false);

    useEffect(() => {
        setPending(true);
        (async () => {
            try {
                const response = await getSummaries();
                setSummary(response);
            } catch (e) {
                setErrors(true);
            } finally {
                setPending(false);
            }
        })();
    }, []);

    const handleResetSummaryData = useCallback(() => {
        setSummaryData(MOCK_COUNTRIES_LIST);
    }, []);

    const handleSearch = useCallback(
        (searchTerm?: string) => {
            if (!searchTerm) {
                handleResetSummaryData();
                return;
            }

            const result = MOCK_COUNTRIES_LIST.filter(searchTermMatchesCountry(searchTerm));

            setSummaryData(result);
        },
        [handleResetSummaryData],
    );

    const handleSelect = useCallback((suggestion: CountrySummary) => {
        setSummaryData([suggestion]);
    }, []);

    return {
        handleSearch,
        handleSelect,
        summary,
        pending,
    };
};

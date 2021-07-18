import { useCallback, useState } from 'react';
import { searchTermMatchesCountry } from './CountrySummariesService';
import { MOCK_COUNTRIES_LIST } from './api-services/getSummaries';

export const useCountrySummaries = () => {
    const [summaryData, setSummaryData] = useState(MOCK_COUNTRIES_LIST);

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

    return {
        summaryData,
        handleSearch,
    };
};

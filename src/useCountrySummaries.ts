import { useCallback, useState } from 'react';
import { searchTermMatchesCountry } from './CountrySummariesService';
import { CountrySummary, MOCK_COUNTRIES_LIST } from './api-services/getSummaries';

interface CountrySummariesState {
    summaryData: CountrySummary[];
    handleSearch: (searchTerm?: string) => void;
}

export const useCountrySummaries = (): CountrySummariesState => {
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

import React, { ChangeEvent, FunctionComponent, useCallback, useEffect, useState } from 'react';
import { Search } from 'react-bootstrap-icons';
import { Button, Dropdown, InputGroup } from 'react-bootstrap';
import './searchbar.css';
import { useSearchSuggestions } from './useSearchSuggestions';
import { CountrySummary } from '../api-services/getSummaries';

interface Props {
    handleSearch: (searchTerm: string) => void;
    handleSelect: (suggestion: CountrySummary) => void;
}

export const SearchBar: FunctionComponent<Props> = ({ handleSearch, handleSelect }) => {
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

    return (
        <div className="input-group mb-3 col-3 ml-auto dropdown">
            <Dropdown>
                <Dropdown.Toggle as={InputGroup} bsPrefix="p-0">
                    <input
                        value={keyword}
                        type="text"
                        className="form-control"
                        placeholder="Filter by country"
                        aria-label="Filter by country"
                        aria-describedby="search-button"
                        onChange={handleChange}
                    />
                </Dropdown.Toggle>
                {!!searchSuggestions?.length && (
                    <Dropdown.Menu className="searchFilterMenu">
                        {searchSuggestions.map((countrySummary) => (
                            <Dropdown.Item
                                eventKey={countrySummary.ID}
                                onSelect={onSelect}
                                key={countrySummary.ID}
                            >
                                {countrySummary.Country}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                )}
            </Dropdown>
            <div className="input-group-append">
                <Button
                    variant="secondary"
                    id="search-button"
                    disabled={!keyword}
                    onClick={onSearch}
                >
                    <Search />
                </Button>
            </div>
        </div>
    );
};

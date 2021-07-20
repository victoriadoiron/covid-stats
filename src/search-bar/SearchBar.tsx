import React, { FunctionComponent, KeyboardEvent } from 'react';
import { Search, X } from 'react-bootstrap-icons';
import {Button, Col, Dropdown, InputGroup, Row} from 'react-bootstrap';
import './searchbar.css';
import { CountrySummary } from '../api-services/getSummaries';
import { useSearch } from './useSearch';

interface Props {
    handleSearch: (searchTerm: string) => void;
    handleSelect: (suggestion: CountrySummary) => void;
}

const ENTER_KEY = 'Enter';

export const SearchBar: FunctionComponent<Props> = ({ handleSearch, handleSelect }) => {
    const { searchSuggestions, onSelect, onSearch, handleChange, keyword, handleClear } = useSearch(
        handleSearch,
        handleSelect,
    );

    const handleKeyPress = (event: KeyboardEvent<HTMLElement>) => {
        if (event.key === ENTER_KEY) {
            onSearch();
        }
    };

    return (
        <Col className="mb-3 input-group dropdown">
            <Dropdown className="ml-auto w-50">
                <Dropdown.Toggle as={InputGroup} bsPrefix="p-0">
                    <input
                        value={keyword}
                        type="text"
                        className="form-control"
                        placeholder="Filter by country"
                        aria-label="Filter by country"
                        aria-describedby="search-button"
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                    />
                </Dropdown.Toggle>
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
                    {!searchSuggestions.length && (
                        <Dropdown.Item key="no-results">no results</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
            <div className="input-group-append">
                {!!keyword && (
                    <Button variant="outline-secondary" id="clear-button" onClick={handleClear}>
                        <X />
                    </Button>
                )}
                <Button
                    variant="secondary"
                    id="search-button"
                    disabled={!keyword}
                    onClick={onSearch}
                >
                    <Search />
                </Button>
            </div>
        </Col>
    );
};

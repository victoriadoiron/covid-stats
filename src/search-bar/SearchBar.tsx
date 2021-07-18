import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import { Search } from 'react-bootstrap-icons';
import { Button, Dropdown, InputGroup } from 'react-bootstrap';
import { MOCK_COUNTRIES_LIST } from '../summary-table/CountryList';
import './searchbar.css';

export const SearchBar: FunctionComponent = () => {
    const [keyword, setKeyword] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setKeyword(value);
    };

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

                <Dropdown.Menu className="searchFilterMenu">
                    {MOCK_COUNTRIES_LIST.map((countrySummary) => (
                        <Dropdown.Item>{countrySummary.Country}</Dropdown.Item>
                    ))}
                    <Dropdown.Item>Country 1 </Dropdown.Item>
                    <Dropdown.Item>Country 2</Dropdown.Item>
                    <Dropdown.Item>Country 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div className="input-group-append">
                <Button variant="secondary" id="search-button" disabled={!keyword}>
                    <Search />
                </Button>
            </div>
        </div>
    );
};

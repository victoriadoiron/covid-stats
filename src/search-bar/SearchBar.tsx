import React, { ChangeEvent, FunctionComponent, useState } from 'react';

export const SearchBar: FunctionComponent = () => {
    const [keyword, setKeyword] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setKeyword(value);
    };

    return (
        <div className="input-group mb-3 col-3 ml-auto">
            <input
                value={keyword}
                type="text"
                className="form-control"
                placeholder="Filter by country"
                aria-label="Filter by country"
                aria-describedby="search-button"
                onChange={handleChange}
            />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="search-button">
                    Search
                </button>
            </div>
        </div>
    );
};

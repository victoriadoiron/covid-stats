import React, { FunctionComponent } from 'react';

export const SearchBar: FunctionComponent = () => {
    return (
        <div className="input-group mb-3 col-3 ml-auto">
            <input
                type="text"
                className="form-control"
                placeholder="Filter by country"
                aria-label="Filter by country"
                aria-describedby="search-button"
            />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="search-button">
                    Search
                </button>
            </div>
        </div>
    );
};

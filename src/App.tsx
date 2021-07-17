import React, { FunctionComponent } from 'react';
import { getSummaries } from './api-services/getSummaries';
import { CountryList } from './summary-table/CountryList';
import { SearchBar } from './search-bar/SearchBar';

// //  if (!this.state.data) {
// //             (async () => {
// //                 try {
// //                     this.setState({data: await this.getData()});
// //                 } catch (e) {
// //                     //...handle the error...
// //                 }
// //             })();

export const App: FunctionComponent = () => {
    const getAllSummaries = async () => {
        try {
            await getSummaries();
        } catch (e) {
            console.log(e);
        }
    };

    getAllSummaries();
    return (
        <div className="mt-5 ml-5 mr-5">
            <div className="row">
                <SearchBar />
            </div>
            <CountryList />
        </div>
    );
};

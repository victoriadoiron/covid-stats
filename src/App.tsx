import React, { FunctionComponent } from 'react';
import { getSummaries } from './api-services/getSummaries';
import { CountryList } from './summary-table/CountryList';

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
        <div>
            <CountryList />
        </div>
    );
};

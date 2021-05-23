import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LaunchDetailsPage from '../pages/LaunchDetailsPage';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <div
                id="app-container"
                className=" flex justify-center h-full w-full  bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"
            >
                <Route exact path="/" component={HomePage} />
                <Route
                    path="/launch-details/:id"
                    component={LaunchDetailsPage}
                />
            </div>
        </BrowserRouter>
    );
};

export default Routes;

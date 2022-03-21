import React from 'react';
import { Sidebar, Home } from '../components';

import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <Sidebar />
            <Home />
        </div>
    );
};

export default HomePage;

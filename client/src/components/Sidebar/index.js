import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { ReactComponent as Avatar } from '../../assets/avatar.svg';
import { ReactComponent as HistoryIcon } from '../../assets/history-icon.svg';
import { ReactComponent as HomeIcon } from '../../assets/home-icon.svg';
import { ReactComponent as LogoutIcon } from '../../assets/logout-icon.svg';

const Sidebar = () => {
    const history = useHistory();
    const { pathname } = useLocation();
    console.log(pathname);

    const handelChangePage = (route) => {
        history.push(`${route}`);
    };

    return (
        <div className="side-bar">
            <h1 className="side-bar-title">SMART FARM</h1>
            <div className="side-bar-btn-container">
                <button
                    className={`side-bar-btn ${
                        pathname === '/' ? 'side-bar-btn--active' : ''
                    }`}
                    onClick={() => handelChangePage('')}
                >
                    <HomeIcon /> <span>Home</span>
                </button>
                <button
                    className={`side-bar-btn ${
                        pathname === '/history' ? 'side-bar-btn--active' : ''
                    }`}
                    onClick={() => handelChangePage('/history')}
                >
                    <HistoryIcon /> <span>History</span>
                </button>
            </div>
            <div className="user-info">
                <Avatar />
                <p>Username</p>
            </div>
            <button className="side-bar-btn logout-btn">
                <LogoutIcon /> <span>Logout</span>
            </button>
        </div>
    );
};

export default Sidebar;

import React from 'react';

import './Header.scss';

export const Header = ({ title }) => {
    return (
        <header className="landing-screen-header">
            <h3>{title}</h3>
        </header>
    );
}

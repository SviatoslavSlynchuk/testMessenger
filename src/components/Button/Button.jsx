import React from 'react';
import './Button.scss';

export const Button = ({ title, className = '', handleButtonClick }) => {
    const btnClassName = `btn ${className}`;
    return (
        <button
            className={btnClassName}
            onClick={handleButtonClick}
        >
            {title}
        </button>
    );
}

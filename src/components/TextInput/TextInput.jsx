import React from 'react';

import './TextInput.scss';

export const TextInput = ({ value, onChange, onKeyPress }) => {
    const handleChange = ({ target: { value } }) => {
        onChange(value);
    }

    return (
        <input className="text-input" type="text" value={value} onChange={handleChange} onKeyPress={onKeyPress} />
    );
}
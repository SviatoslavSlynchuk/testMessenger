import React from 'react';

import './MessageItem.scss';

export const MessageItem = ({ message: { author, self, message } }) => {
    return (
        <li className={`message-item ${self ? "right" : "left"}`}>
            <h5>{author}</h5>
            <div>{message}</div>
        </li>
    );
}
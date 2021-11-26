import React from 'react';

import './ChatListItem.scss';

export const ChatListItem = ({ name, id, handleClick }) => {
    const onListItemClick = () => {
        handleClick(id);
    }

    return (
        <li className="chat-list-item" onClick={onListItemClick}>{name}</li>
    );
}
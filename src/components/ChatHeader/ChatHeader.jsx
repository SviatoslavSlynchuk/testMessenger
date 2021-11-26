import React from 'react';
import { useDispatch } from 'react-redux';
import { messages } from '../../messages';
import Button from '../Button';
import Header from '../Header';
import { setSelectedChatId } from '../../slices/chatsListSlice';

import './ChatHeader.scss';

export const ChatHeader = ({title}) => {
    const dispatch = useDispatch();

    const onBackButtonClick = () => {
        dispatch(setSelectedChatId(null));
    }
    return (
        <>
            <Header title={title}/>
            <Button title={messages.goBack} className="back-btn" handleButtonClick={onBackButtonClick}/>
        </>
    );
}
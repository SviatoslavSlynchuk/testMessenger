import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectChats } from '../../slices/chatsListSlice';
import Header from '../../components/Header';
import ChatListItem from '../../components/ChatListItem';
import { messages } from '../../messages';
import { setSelectedChatId } from '../../slices/chatsListSlice';

import './ChatsList.scss';

export const ChatsList = () => {
    const dispatch = useDispatch();
    const chats = useSelector(selectChats);

    const onChatClickHandler = (id) => {
        dispatch(setSelectedChatId(id));
    }

    return (
        <section className="chat-list-wrapper">
            <Header 
                title={messages.chatsListTitle} 
            />
            <ul className="chats-list-container">
                {
                    chats.map(
                        ({ name, id }) => <ChatListItem key={id} name={name} id={id} handleClick={onChatClickHandler} />
                    )
                }
            </ul>
        </section>
    );
}
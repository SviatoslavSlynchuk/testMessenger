import React from 'react';
import { useSelector } from 'react-redux';
import { ChatBody } from '../../components/ChatBody/ChatBody';
import ChatFooter from '../../components/ChatFooter';
import ChatHeader from '../../components/ChatHeader';
import { selectChatById } from '../../slices/chatsListSlice';

import './Chat.scss';

export const Chat = () => {
    const { name, messages } = useSelector(selectChatById);
    
    return (
        <section className="chat-container">
            <ChatHeader title={name} />
            <ChatBody name={name} messages={messages} />
            <ChatFooter />
        </section>
    );
}
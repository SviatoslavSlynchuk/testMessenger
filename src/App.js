import React from 'react';
import { useSelector } from 'react-redux';
import Chat from './views/Chat';
import ChatsList from './views/ChatsList';
import { getChats } from './slices/chatsListSlice';
import { useDataFetch } from './customHooks/useDataFetch';
import { selectChatId } from './slices/chatsListSlice';

import './App.scss';

const App = () => {
    const selectedChat = useSelector(selectChatId);
    useDataFetch(getChats);
    
    return (
        <section className="app-container">
            { selectedChat === undefined || selectedChat === null ?
                <ChatsList /> :
                <Chat />
            }
        </section>
    );
}

export default App;

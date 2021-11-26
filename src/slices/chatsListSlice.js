import { createSlice } from "@reduxjs/toolkit";
import RestAPI from "../api/RestAPI";
const SELF_AUTHOR_NAME = 'Me';

const chatsListSlice = createSlice({
    name: 'chatsList',
    initialState: {
        chats: [],
        selectedChatId: null
    },
    reducers: {
        setChats: (state, action) => {
            state.chats = action.payload;
        },
        setSelectedChatId: (state, action) => {
            state.selectedChatId = action.payload;
        },
        postMessage: (state, { payload }) => {
            state.chats = state.chats.map((chat) => chat.id === payload.id ?
                {
                    ...chat,
                    messages: [ ...chat.messages, payload.message ]
                }
                : chat
            );
        }
    }
});

export const { setChats, setSelectedChatId, postMessage } = chatsListSlice.actions;

export const getChats = () => {
    return async (dispatch, getState) => {
        try {
            const chats = await RestAPI.getChats();
            
            dispatch(setChats(chats));
        } catch (err) {
            console.log(err);
        }
    }
}

export const addMessage = (message) => {
    return async (dispatch, getState) => {
        try {
            const id = selectChatId(getState());
            RestAPI.postMessage(id, message);
            dispatch(postMessage({id, message}));
        } catch (err) {
            console.log(err);
        }
    }
}

export const selectChats = state => state.chatsList.chats;
export const selectChatId = state => state.chatsList.selectedChatId;
export const selectChatById = state => selectChats(state).find(chat => chat.id === selectChatId(state));
export const generateMessageObj = message => ({ author: SELF_AUTHOR_NAME, self: true, message});

export default chatsListSlice.reducer;

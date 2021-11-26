import { configureStore } from '@reduxjs/toolkit';
import chatsListReducer from '../slices/chatsListSlice';

export const store = configureStore({
    reducer: {
        chatsList: chatsListReducer,
    },
});

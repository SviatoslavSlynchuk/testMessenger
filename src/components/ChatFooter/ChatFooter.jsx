import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button';
import TextInput from '../TextInput';
import { messages } from '../../messages';
import { addMessage, generateMessageObj } from '../../slices/chatsListSlice';
import { debounce } from '../../helpers/generalHelpers';

import './ChatFooter.scss';
const defaultState = '';

export const ChatFooter = () => {
    const [ message, setMessage ] = useState(defaultState);

    const dispatch = useDispatch();

    const submitMessage = debounce(() => {
        if (message) {
            dispatch(addMessage(generateMessageObj(message)));
            setMessage(defaultState);
        }
    }, 200);

    const onEnterKeyPress = (evt) => {
        if (evt.key === 'Enter') {
            submitMessage();
        }
    };

    return (
        <footer className="chat-footer">
            <TextInput value={message} onChange={setMessage} onKeyPress={onEnterKeyPress} />
            <Button title={messages.send} handleButtonClick={submitMessage} />
        </footer>
    );
}

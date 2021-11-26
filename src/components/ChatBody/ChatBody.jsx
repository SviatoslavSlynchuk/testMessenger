import React, { useEffect, useRef } from "react";
import MessageItem from "../MessageItem";

import './ChatBody.scss';

export const ChatBody = ({ messages }) => {

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className="chat-body">
            <ul>
                {
                    messages.map((message, index) => 
                        <MessageItem key={`${message.author}-${index}`} message={message} />
                    )
                }
                <li className="scroll-to-bottom" ref={messagesEndRef} />
            </ul>
            
        </div>
    );
}
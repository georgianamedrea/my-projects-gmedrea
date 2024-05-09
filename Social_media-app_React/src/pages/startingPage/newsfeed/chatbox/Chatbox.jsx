import styles from './Chatbox.module.scss';

import { useState } from 'react';

function ChatBox() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        setMessages([...messages, input]);
        setInput('');
    };

    return (
        <div>
            {messages.map((message, index) => (
                <p key={index}>{message}</p>
            ))}
            <input value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={handleSend}>Send</button>
        </div>
    );
}

export default ChatBox;
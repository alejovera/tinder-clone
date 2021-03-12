import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Cane Corso',
            image: 'https://www.timeforpaws.co.uk/img/cane-corso.jpg',
            message: 'Hola! Qué tal?',
        },
        {
            name: 'Ellen',
            image: 'https://www.timeforpaws.co.uk/img/cane-corso.jpg',
            message: 'Todo bien?',
        },
        {
            message: 'Bien. Y vos?',
        }
    ])
    
    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput('')
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">MATCHEASTE CON CANE CORSO EL 11/3/2021</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}
            <form className="chatScreen__input">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text" 
                    placeholder="Escriba un mensaje..."
                    className="chatScreen__inputField"
                />
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton">ENVIAR</button>
            </form>
        </div>
    )
}

export default ChatScreen

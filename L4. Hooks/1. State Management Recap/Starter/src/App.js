import logo from './logo.svg';
import './App.css';
import ChatCard from './ChatCard';
import { useState } from 'react';

const users = [{ username: 'Amy' }, { username: 'John' }];

const App = () => {
  const [messages, setMessages] = useState([]);

  const TheMessage = (username, message) => {
    const NewMessage = {
      username: username,
      text: message,
    };

    setMessages(messages.concat([NewMessage]));
  };
  // If the user did not type anything, he/she should not be allowed to submit.
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'>ReactND - Coding Practice</h1>
      </header>

      <div className='container'>
        {users.map((user) => (
          <ChatCard
            key={user.username}
            user={user}
            messages={messages}
            TheMessage={TheMessage}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

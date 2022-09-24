import AddMessage from './AddMessage';
import ChatBox from './ChatBox';

const ChatCard = ({ user, messages, TheMessage }) => {
  const HandleTheMessage = (message) => {
    TheMessage(user.username, message);
  };

  return (
    <div className='chat-window'>
      <h2>Super Awesome Chat</h2>
      <div className='name sender'>{user.username}</div>
      <ChatBox user={user} messages={messages} />
      <AddMessage TheMessage={HandleTheMessage} />
    </div>
  );
};

export default ChatCard;

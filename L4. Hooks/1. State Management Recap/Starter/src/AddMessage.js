import { useState } from 'react';

const AddMessage = ({ TheMessage }) => {
  const [message, setMessage] = useState('');

  const InputChange = (event) => {
    const { value } = event.target;

    setMessage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    TheMessage(message);
    setMessage('');
  };

  const isDisabled = () => {
    return message === '';
  };

  return (
    <div>
      <form className='input-group' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-control'
          placeholder='Enter your message...'
          onChange={InputChange}
        />
        <div className='input-group-append'>
          <button className='btn submit-button' disabled={isDisabled()}>
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMessage;

import { useState } from 'react';
import PropTypes from 'prop-types';
const ItemsInput = ({ addItem }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const createItem = (event) => {
    event.preventDefault();
    addItem(value);
    setValue('');
  };

  const inputIsEmpty = () => value === '';

  return (
    <div>
      <form onSubmit={createItem}>
        <input
          type='text'
          placeholder='Enter New Item'
          value={value}
          onChange={handleChange}
        />
        <button disabled={inputIsEmpty()}>Add</button>
      </form>
    </div>
  );
};

ItemsInput.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default ItemsInput;

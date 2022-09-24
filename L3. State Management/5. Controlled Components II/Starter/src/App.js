import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ItemsInput from './itemsinput';
import ItemList from './ItemLIst';

const App = () => {
  const [items, setItems] = useState([]);

  const deleteLastItem = (event) => {
    setItems(items.slice(0, -1));
  };

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const noItemsFound = () => items.length === 0;

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'>ReactND - Coding Practice</h1>
      </header>
      <h2>Shopping List</h2>
      <ItemsInput addItem={handleAddItem} />
      <button onClick={deleteLastItem} disabled={noItemsFound()}>
        Delete Last Item
      </button>
      <p className='items'>Items</p>
      <ItemList items={items} />
    </div>
  );
};

export default App;

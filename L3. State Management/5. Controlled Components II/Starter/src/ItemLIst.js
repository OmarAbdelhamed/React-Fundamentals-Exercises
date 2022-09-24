import PropTypes from 'prop-types';

const ItemList = ({ items }) => {
  return (
    <div>
      <ol className='item-list'>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemList;

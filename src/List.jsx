import React from 'react';
import './App.css';

const List = ({ data, removeExpanse }) => {
  if (!data.length) {
    return <p className='list-center'>Add some expanses</p>;
  }
  const removeItem = (e) => {
    const id = e.currentTarget.id;
    removeExpanse(id);
  };

  return (
    <ul className='container'>
      {data.map((item, index) => {
        const { date, number, name, currency } = item;
        return (
          <li className='item' key={index}>
            <strong>{date}</strong>
            <strong>{number}</strong>
            <strong>{currency}</strong>
            <strong>{name}</strong>
            <button id={index} onClick={removeItem}>
              DELETE
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;

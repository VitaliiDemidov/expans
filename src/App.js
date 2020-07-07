import React, { useState } from 'react';
import './App.css';
import List from './List';
import {
  addExpanse,
  setTotal,
  sortExpanses,
  removeExpanse,
} from './redux/actions';
import { connect, useSelector } from 'react-redux';

const App = ({ addExpanse, sortExpanses, removeExpanse, setTotal }) => {
  const list = useSelector((state) => state.expanse);
  const rates = useSelector((state) => state.data.total);

  const [date, setDate] = useState('');
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('');
  const [currency, setCurrency] = useState('');
  const [togle, setTogle] = useState(false);

  const onDisabled = name && date && number && currency ? false : true;
  const sum = list.reduce((acc, item) => acc + +item.number, 0);
  const EUR = list.reduce((acc, item) => acc + +item.number / rates, 0);

  const submitValue = () => {
    const obj = {
      date,
      number,
      currency,
      name,
    };
    addExpanse(obj);
    setDate('');
    setCurrency('');
    setName('');
    setNumber(0);
  };
  return (
    <>
      <div className='container'>
        <input
          type='date'
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <input
          type='number'
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
        <input
          type='text'
          onChange={(e) => setCurrency(e.target.value)}
          value={currency}
          placeholder='Currency(PLN)'
        />
        <input
          type='text'
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder='Add Prodact'
        />
        <input
          type='submit'
          disabled={onDisabled}
          onClick={submitValue}
          value='Add Expanses'
        />
      </div>
      <div className='container'>
        <button
          disabled={date && list.length > 0 ? false : true}
          onClick={() => sortExpanses(date)}
        >
          {date ? `filter expanses by${date}` : 'select date'}
        </button>
        <button
          onClick={() => {
            setTotal();
            setTogle(!togle);
          }}
        >
          TOTAL {togle ? 'PLN' : 'EUR'}
        </button>
        <span>
          <i>total sum</i>{' '}
          {togle ? `${EUR.toFixed(2)}EUR` : `${sum.toFixed(2)}PLN`}
        </span>
        <List removeExpanse={removeExpanse} data={list} />
      </div>
    </>
  );
};
const mapDispatchToProps = {
  addExpanse,
  sortExpanses,
  removeExpanse,
  setTotal,
};
export default connect(null, mapDispatchToProps)(App);

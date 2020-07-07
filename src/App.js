import React, { useState } from 'react';
import './App.css';
import List from './List';
import { addExpanse, setTotal, sortExpanses } from './redux/actions';
import { connect, useDispatch, useSelector } from 'react-redux';

const App = ({ addExpanse, sortExpanses }) => {
  const amount = useSelector((state) => state.expanse);
  const rates = useSelector((state) => state.data.total);
  const dispatch = useDispatch();

  const [date, setDate] = useState(0);
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('');
  const [currency, setCurrency] = useState('');

  const onDisabled = name && date && number && currency ? false : true;
  const sum = amount.reduce((acc, item) => acc + +item.number, 0);
  const EUR = amount.reduce((acc, item) => acc + +item.number / rates, 0);

  const submitValue = () => {
    const list = {
      date,
      number,
      currency,
      name,
    };
    addExpanse(list);
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
          disabled={date ? false : true}
          onClick={() => sortExpanses(date)}
        >
          {date ? `filter expanses by${date}` : 'select date'}
        </button>
        <button onClick={() => dispatch(setTotal())}>TOTAL EUR</button>
        <span>
          <i>total sum</i>{' '}
          {rates ? `${EUR.toFixed(2)}EUR` : `${sum.toFixed(2)}PLN`}
        </span>
        <List />
      </div>
    </>
  );
};
const mapDispatchToProps = {
  addExpanse,
  sortExpanses,
};

export default connect(null, mapDispatchToProps)(App);

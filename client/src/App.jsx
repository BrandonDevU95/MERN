import React from 'react';
import { DatePicker } from 'antd';
import './App.scss';

function App() {
  return (
    <div className="app">
      <h1>Web Personal</h1>
      <h2>Web personal</h2>
      <DatePicker onChange={onChange} />
    </div>
  );
}

export default App;

function onChange(date, dateString) {
  console.log(date, dateString);
}
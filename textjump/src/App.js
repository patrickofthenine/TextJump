import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parser from './books/parser';
import Books from './books/Books'

const App = () => {

  let parser = new Parser();
  let books = new Books();
  let MobyDick = books.shelf;
  console.log('mobyd', MobyDick)

  return (
    <div className="App" id="root">
      

    </div>
  );
}

export default App;

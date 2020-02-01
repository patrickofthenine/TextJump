import React from 'react';
import { Canvas } from 'react-three-fiber';
import Parser from './books/parser';
import Books from './books/Books'
import Scene from './components/Scene'

const App = () => {

  let parser = new Parser();
  let books = new Books();
  let MobyDick = new books.shelf.MobyDick();
  let source = parser.parse(MobyDick) 

  return (
    <div className="App" id="root">
        <Canvas>
            <Scene source={source}/>
        </Canvas> 
    </div>
  );
}

export default App;

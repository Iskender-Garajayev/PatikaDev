import React from 'react'
import './App.css';
import Counter from './component/Counter';
import InputExample from './component/InputExample';
import Inform from './component/Inform';

function App() {


  return (
    <div className="App">
      <Inform/>
      <hr />
      <Counter/>
      <hr />
      <InputExample/>

    </div>
    
  );
}

export default App;

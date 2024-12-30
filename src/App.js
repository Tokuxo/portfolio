import logo from './logo.svg';
import React, { use, useState } from 'react';
import './App.css';

function App() {

  const [elementId, setElementId] = useState(['current','redirect','redirect']);

  function changeId(x){
    const swap = ['redirect','redirect','redirect'];
    swap[x] = 'current';
    setElementId(swap);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='topMenu'>
          <ul>
            <li><button type='button' id={elementId[0]} onClick={() => changeId(0)}>Info</button></li>
            <li><button type='button' id={elementId[1]} onClick={() => changeId(1)}>Past Work</button></li>
            <li><button type='button' id={elementId[2]} onClick={() => changeId(2)}>Contact</button></li>
          </ul>
        </div>
        <div className={elementId[0]}>
          <p>Introduction to Modeler Tokuxo</p>
          <img src="Fumo.jpg" alt="wheres my fucking fumo"></img>
        </div>
        <div className={elementId[1]}>
          <h1>1</h1>
        </div>
        <div className={elementId[2]}>
          <h1>2</h1>
        </div>
      </header>
    </div>
  );
}

export default App;

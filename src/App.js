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
        <div>
          <ul>
            <li><button type='button' id={elementId[0]} onClick={() => changeId(0)}>Info</button></li>
            <li><button type='button' id={elementId[1]} onClick={() => changeId(1)}>Past Work</button></li>
            <li><button type='button' id={elementId[2]} onClick={() => changeId(2)}>Contact</button></li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;

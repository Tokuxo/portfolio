import logo from './logo.svg';
import React, { use, useState } from 'react';
import fumoImage from './Fumo.gif';
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
          <p id='title'>Introduction to Modeler Tokuxo</p>
          <div>
            <img src={fumoImage} alt="wheres my fucking fumo"></img>
            <p id='content'>Hi, I'm Tokuxo, the Modeler of your choice <br></br>
              with 2 years of blender experience <br></br>
              I will assist you through your game development <br></br>
              This includes providing assets, accessories, and renders <br></br><br></br><br></br><br></br>
              Click the <button type='button' onClick={() => changeId(1)}>"Past Work"</button> tab to see my work <br></br>
              Click the <button type='button' onClick={() => changeId(2)}>"Info"</button> tab to see how to contact me <br></br>
            </p>
          </div>
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

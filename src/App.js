import logo from './logo.svg';
import React, { use, useState } from 'react';
import fumoImage from './Fumo.gif';
import Image1 from './PastWorks/1.png'
import Image2 from './PastWorks/2.png'
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
            <img src={fumoImage} alt="wheres my fucking fumo" id='Side'></img>
            <p id='content'>Hi, <b>I'm Tokuxo</b>, the Modeler of your choice <br></br>
              with <b>2 years</b> of blender experience <br></br>
              I will assist you through your game development <br></br>
              <b>This includes providing you</b>
              <ul>
                <li>Assets</li><li>Accessories</li><li>Renders</li>
              </ul>
              Click the <button type='button' onClick={() => changeId(1)}>"Past Work"</button> tab to see my work <br></br>
              Click the <button type='button' onClick={() => changeId(2)}>"Contact"</button> tab to see how to contact me <br></br>
            </p>
          </div>
        </div>
        <div className={elementId[1]}>
          <div id='scrollable'>
            <p id='title'>Past Works</p>
            <div className='Display'>
              <img src={Image1}></img>
              <img src={Image2}></img>
            </div>
            <br></br><br></br>
            <hr></hr>
            <br></br>
            <div className='WIP'>
              <h3> &lt; more images will be placed &gt;</h3>
              <img src={fumoImage} id='Throbber'></img>
            </div>
          </div>
        </div>
        <div className={elementId[2]}>
          <p id='title'>Contacting Method</p>
            <div>
              <img src={fumoImage} alt="wheres my fucking fumo" id='Side'></img>
              <p id='content'>If you have considered to hire me, you may DM me in <a id='dicordLink' href='https://discordapp.com/channels/@tokuxo/904626967972806666'>Discord</a> <br></br>
                My user name is tokuxo<br></br>
                <b>Please contain the Followings in your Message</b>
                <ul>
                  <li>Objective(s)</li>
                  <li>Pricing</li>
                  <li>Due Date</li>
                  <li>Reference(s)</li>
                  <li>Short Game Description (optional)</li>
                  <sub>DM that lacks any of the items above will be ignored</sub>
                </ul>
              </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import { motion } from "framer-motion"
import fumoImage from './fumo copy.gif'
import Image1 from './PastWorks/1.png'
import Image2 from './PastWorks/2.png'
import Image3 from './PastWorks/3.png'
import Image4 from './PastWorks/4.png'
import Image5 from './PastWorks/5.png'
import './App.css';

function App() {

  const [elementId, setElementId] = useState([true,false,false]);

  function changeId(x){
    const swap = [false,false,false];
    swap[x] = true;
    setElementId(swap);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='topMenu'>
          <ul>
            <li><motion.button type='button' id={elementId[0] ? 'current' : 'redirect'} onClick={() => changeId(0)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Info</motion.button></li>
            <li><motion.button type='button' id={elementId[1] ? 'current' : 'redirect'} onClick={() => changeId(1)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Past Work</motion.button></li>
            <li><motion.button type='button' id={elementId[2] ? 'current' : 'redirect'} onClick={() => changeId(2)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Contact</motion.button></li>
          </ul>
        </div>
        {elementId[0] && (
          <motion.div 
            initial={{opacity: 0}}
            exit={{opacity: 1}}
            animate={{opacity: 1}}
            transition={{duration: 0.2}}>
              
            <p id='title'>Introduction to Modeler Tokuxo</p>
            <div>
              <img src={fumoImage} alt="wheres my fucking fumo" id='Side'></img>
              <p id='content'>Hi, <b>I'm Tokuxo</b>, the Modeler of your choice <br></br>
                with <b>2+ years</b> of blender experience <br></br>
                I will assist you through your game development <br></br>
                With great Efficiency and Quality <br></br>
                <b>Providing you</b>
                <ul>
                  <li>Assets</li><li>Accessories</li><li>Renders</li>
                </ul>
                Click <button type='button' onClick={() => changeId(1)}>"Past Work"</button> tab to see my work <br></br>
                Click <button type='button' onClick={() => changeId(2)}>"Contact"</button> tab to see how to contact me <br></br>
              </p>
            </div>
          </motion.div>
        )}
        {elementId[1] && (
          <motion.div 
            initial={{opacity: 0}}
            exit={{opacity: 1}}
            animate={{opacity: 1}}
            transition={{duration: 0.2}} id='scrollable'>
              <p id='title2'>Past Works</p>
              <div className='Display'>
                <img src={Image2} alt="QuinUltrakill"></img>
                <img src={Image3} alt="MLGSScenery"></img>
                <img src={Image4} alt="MoonLightGreatSword"></img>
                <img src={Image5} alt="BakeKujira"></img>
                <img src={Image1} alt="UraharaShop"></img>
              </div>
              <br></br><br></br>
              <hr></hr>
              <br></br>
              <div className='WIP'>
                <h3> &lt; more images will be placed &gt;</h3>
                <img src={fumoImage} id='Throbber' alt="Throbber"></img>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </div>
          </motion.div>
        )}
        {elementId[2] && (
          <motion.div 
            initial={{opacity: 0}}
            exit={{opacity: 1}}
            animate={{opacity: 1}}
            transition={{duration: 0.2}}>

            <p id='title'>Contacting Method</p>
              <div>
                <img src={fumoImage} alt="wheres my fucking fumo" id='Side'></img>
                <p id='content'>You can DM me in <a id='dicordLink' href='https://discordapp.com/channels/@tokuxo/904626967972806666'>Discord</a> to hire me<br></br>
                  My user name is tokuxo<br></br>
                  <b>Please state the Followings in your Message</b>
                  <ul>
                    <li>Model(s)</li>
                    <li>Pricing</li>
                    <li>Due Date</li>
                    <li>Reference(s)</li>
                    <li>Short Game Description (optional)</li>
                    <sub>DM that lacks any of the items above will be ignored</sub>
                  </ul>
                </p>
            </div>
          </motion.div>
        )}
      </header>
    </div>
  );
}

export default App;

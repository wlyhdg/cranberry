import React, { useState } from 'react';
import './App.scss';
import CanvasOne from './ColorPickers/CanvasOne'
import { parseColorObject } from '../utils';
import BaseInput from './BaseInput/BaseInput';

function App() {
  const [color, setColor] = useState('rgba(0, 0, 0, 0.5)')
  
  const changeBgColor = (color, fmt) => {
    let c = parseColorObject('rgb', color, 0.5)
    setColor(c)
  }

  return (
    <div className="App">
      <div className="hue-container" style={{background: color}}>
        <CanvasOne 
          onColorChange={changeBgColor}
        />
      </div>
      <pre>   
        This
        nice little thi    ng 
        was    made  b y<br/>  
        w l     y   h d           g
      </pre>


      <BaseInput />
    </div>
  );
}

export default App;

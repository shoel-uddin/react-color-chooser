import './App.css';
import ColorRed from './colors/ColorRed';
import ColorBlue from './colors/ColorBlue';
import ColorGreen from './colors/ColorGreen';
import ShowColor from './colors/ShowColor';
import { useState } from 'react';



function App() {
  const [color, setColor] = useState(" ")

  function getColor(color) {
    setColor(color)
  }
  return (
      <div className="App">
        <header className="App-header">
          <ColorRed getColor={getColor}/>
          <ColorBlue getColor={getColor}/>
          <ColorGreen getColor={getColor}/>
          <ShowColor color={color}/>
        </header>
      </div>
    );
}

export default App;

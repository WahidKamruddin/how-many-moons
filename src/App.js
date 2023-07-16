import React, { useState } from 'react';
import Axios from 'axios';

const App = () => {
  const [planet, setPlanet] = useState('');
  const [moons, setMoons] = useState('?');

  const handlePlanetChange = (e) => {
    setPlanet(e.target.value);
  };

  const numOfMoons = () => {
    Axios.get(`https://api.le-systeme-solaire.net/rest/bodies/${planet}`).then((response) => {
      let moonData = response.data.moons;
      console.log(moonData);

      if (moonData == null) {
        setMoons('no');
      }

      else if (moonData) {
        setMoons(moonData.length);
      }

      else {
        setMoons('...');
      }
      

    });

    
  };

  return (
    <div className="App">
      <section  id='title'>
        <center><h1>How Many Moons?</h1></center>
        <center><p>Earth only has 1 moon. But what about other planets? Not to worry, we got you covered. Select a planet in our solar system to find out how many moons they have!</p></center>

        <div id="dots" className="centered">
          <div id="d1" className="dot"> </div>
          <div id="d2" className="dot"> </div>
          <div id="d3" className="dot"> </div>
      </div>
      </section>

      <hr></hr>
      
      <section id='selection'>
        <center><label>Select a planet:</label></center>
        <center>
        <div className="custom-select">
          <select id="planet" value={planet} onChange={handlePlanetChange}>
            <option value="">Choose a planet</option>
            <option value="Mercury">Mercury</option>
            <option value="Venus">Venus</option>
            <option value="Mars">Mars</option>
            <option value="Jupiter">Jupiter</option>
            <option value="Saturn">Saturn</option>
            <option value="Uranus">Uranus</option>
            <option value="Neptune">Neptune</option>
          </select>
        </div>
        </center>

        <center><button id='btn' onClick={numOfMoons}>Find</button></center>
        <center><p id='result'>There are {moons} moons!</p></center>
      </section>
    </div>
  );
};

export default App;
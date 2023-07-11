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
      <section>
        <center><h1>How Many Moons?</h1></center>
      </section>
      
      <section>
        <center><p>Earth only has 1 moon. But what about other planets? Not to worry, we got you covered. Select a planet in our solar system to find out how many moons they have!</p></center>
      </section>
      
      
      <label>Select a planet:</label>
      <div class="custom-select">
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
      <button onClick={numOfMoons}>Find</button>
      <p>There are {moons} moons!</p>
    </div>
  );
};

export default App;
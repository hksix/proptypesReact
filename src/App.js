import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {LOCATIONS} from './reducers.js'
import Spaceship from './Spaceship.js';
import CrewMember from './CrewMember.js';
import BadAlien from './BadAlien.js'
import Planet from './Planet.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Planet name="earth" mines={10}>
          <CrewMember name="Uhuru" rank="Comander" location={LOCATIONS.PLANET_EARTH} />
          <CrewMember name="Kirk Crusher" rank="Ensign" location={LOCATIONS.PLANET_EARTH}/>
          <BadAlien name='Kahn' species="Human?" />
        </Planet>

      <Spaceship name='Enterprise' commanderType='CrewMember'>
        <CrewMember name="Riker" rank="Comander" location={LOCATIONS.TRANSPORTER_ROOM} />
        <CrewMember name="Wesley Crusher" rank="Ensign" location={LOCATIONS.TRANSPORTER_ROOM} />
        <CrewMember name="Picard" rank="El Captain" location={LOCATIONS.TRANSPORTER_ROOM} />
        <BadAlien name='Borger' species="Borg" location={LOCATIONS.UNKNOWN} />
      </Spaceship>
        <button onClick={this._addMember}>Add Member</button>
      </div>
    );
  }
  _addMember=()=>{ 
      return(
        <div>
    <CrewMember name="Test" rank="NP" location={LOCATIONS.PLANET_EARTH}/>
      </div>
      )
  }
}

export default App;

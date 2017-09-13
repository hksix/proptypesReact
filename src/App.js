import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
        <Planet name="earth">
          <CrewMember name="Uhuru" rank="Comander" />
          <CrewMember name="Kirk Crusher" rank="Ensign" />
          <BadAlien name='Kahn' species="Human?" />
        </Planet>
        
      <Spaceship name='Enterprise' commanderType='CrewMember'>
        <CrewMember name="Riker" rank="Comander" />
        <CrewMember name="Wesley Crusher" rank="Ensign" />
        <BadAlien name='Borger' species="Borg" />
      </Spaceship>
        
      </div>
    );
  }
}

export default App;

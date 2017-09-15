import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {LOCATIONS} from './reducers.js'
import Spaceship from './Spaceship.js';
import CrewMember from './CrewMember.js';
import BadAlien from './BadAlien.js'
import Planet from './Planet.js'
import LocationContainer from './LocationContainer'

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

      <Spaceship name='Enterprise' commanderType='CrewMember'clickHandler={this._addman}>
        <CrewMember name="Riker" rank="Comander" location={LOCATIONS.TRANSPORTER_ROOM} />
        <CrewMember name="Wesley Crusher" rank="Ensign" location={LOCATIONS.TRANSPORTER_ROOM} />
        <CrewMember name="Picard" rank="El Captain" location={LOCATIONS.TRANSPORTER_ROOM} />
        <BadAlien name='Borger' species="Borg" location={LOCATIONS.UNKNOWN} />
      </Spaceship>
        <LocationContainer/>
      </div>
    );
  }

  _addman=()=>{ 
      let newMember = {name:'test'}
      let newShip= Object.assign({},this.state.name, newMember)
      this.setState({
        name: newMember
      })
      console.log("hey")
  }

}
export default App;

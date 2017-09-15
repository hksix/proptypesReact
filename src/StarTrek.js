import React, { Component } from 'react';
import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {LOCATIONS} from './reducers.js'
import Spaceship from './Spaceship.js';
import CrewMember from './CrewMember.js';
import BadAlien from './BadAlien.js'
import Planet from './Planet.js'
import LocationContainer from './LocationContainer'
import Sidebar from './Menu'

class StarTrek extends Component {
    render() {
      return (
        <div className="trekpage">
          <Planet name="earth" mines={10}>
            <CrewMember name="Uhuru" rank="Comander" location={LOCATIONS.PLANET_EARTH} />
            <CrewMember name="Kirk Crusher" rank="Ensign" location={LOCATIONS.PLANET_EARTH}/>
            <BadAlien name='Kahn' species="Human?"location={LOCATIONS.PLANET_EARTH} />
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
}

export default StarTrek;
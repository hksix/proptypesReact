import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
import StarTrek from './StarTrek.js'

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <div className="App-header">
          <Sidebar/>
        </div>
        
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

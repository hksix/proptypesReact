import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Spaceship from './Spaceship.js';
import {LOCATIONS} from './reducers.js'

import * as actions from './actions.js';
import * as constants from './Constants.js';

// import crewMembers from './reducers.js'
import starTrekApp from './reducers.js'
// can slap a new name if using combine reducers then assign that to createStore
import { ships } from './reducers.js'
import { createStore } from 'redux';

const store = createStore(starTrekApp);

window.store = store;
window.actions = actions
window.constants = constants
// window.ADD_MEMBER = actions.ADD_MEMBER;
// window.BEAM_MEMBER = actions.BEAM_MEMBER;
// window.ADD_LOCATION = actions.ADD_LOCATION;
// window.ADD_RESOURCE = actions.ADD_RESOURCE;
// window.REMOVE_RESOURCE = actions.REMOVE_RESOURCE;
// window.CREATEPLANET= actions.createPlanet;

// window.ADD_SHIP = actions.ADD_SHIP;
// window.ADD_PLANET = actions.ADD_PLANET;
// window.MINE_CRYSTALS = actions.MINE_CRYSTALS;
// window.HOLD_LUAU = actions.HOLD_LUAU;
// window.TRANSFER_CRYSTALS = actions.TRANSFER_CRYSTALS;


window.TRANSPORTER_ROOM = LOCATIONS.TRANSPORTER_ROOM;
window.PLANET_EARTH= LOCATIONS.PLANET_EARTH;
window.PLANET_THE_SUN= LOCATIONS.PLANET_THE_SUN;

// store.dispatch({
//     type: window.ADD_SHIP,
//     name: 'Enterprise',
//     id: 1
//   })
  
//   store.dispatch({
//     type: window.ADD_SHIP,
//     name: 'EXCELSIOR',
//     id: 2
//   })
  
//   store.dispatch({
//     type: window.ADD_SHIP,
//     name: 'Discovery',
//     id: 3
//   })
  
  
//   store.dispatch({
//     type: window.ADD_PLANET,
//     name: 'Atlanta, the one with no power',
//     id: 4
//   })
  
//   store.dispatch({
//     type: window.ADD_PLANET,
//     name: 'Pluto, which is totally a planet',
//     id: 5
//   })
  
//   store.dispatch({
//     type: window.ADD_MEMBER,
//     name: 'uhuru',
//     rank: 'commander',
//     id: 11111,
//     location: LOCATIONS.PLANET_EARTH
//   })
  
//   store.dispatch({
//     type: window.ADD_MEMBER,
//     name: 'crusher',
//     rank: 'chief medical officer',
//     id: 111222211,
//     location: LOCATIONS.PLANET_EARTH
//   })
  


// store.dispatch(actions.createPlanet({},100,'MARS', {crystals:1000}))

  
//   const transferCrystals = (store, howMany, fromId, toId) => {
//     // getState, see if there are enough crystals
  
//     const allPlanets = store.getState().planets;
//     const thePlanet = allPlanets.filter( planet => fromId === planet.id)[0]; // GIANT ASSUMPTION HERE!!!
  
//     // then dispatch two actions
//     if (thePlanet.crystals >= howMany) {
//       store.dispatch({
//         type: actions.REMOVE_CRYSTALS,
//         howMany: howMany,
//         id: fromId
//       });
//       store.dispatch({
//         type: actions.ADD_CRYSTALS,
//         howMany: howMany,
//         id: toId
//       });
//     } else {
//       // don't do nuthin.
//       // stop it.
//     }
  
  
//   };
  
//   window.transferCrystals = transferCrystals;
//   window.createPlanet = createPlanet;





ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

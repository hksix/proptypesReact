import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

import { LOCATIONS } from './reducers';


import * as actions from './actions';
import * as constants from './Constants';

import starTrekApp from './reducers';
import Memebers from './Members.js';

import { createStore } from 'redux';

import _ from 'lodash';

window._ = _;


const store = createStore(starTrekApp, {});



window.store = store;
window.actions = actions;
window.constants = constants;


// store.dispatch({
//   type: window.ADD_SHIP,
//   name: 'Enterprise',
//   id: 1
// })

// store.dispatch({
//   type: window.ADD_SHIP,
//   name: 'EXCELSIOR',
//   id: 2
// })

// store.dispatch({
//   type: window.ADD_SHIP,
//   name: 'Discovery',
//   id: 3
// })


// store.dispatch({
//   type: window.ADD_PLANET,
//   name: 'Atlanta, the one with no power',
//   id: 4
// })

// store.dispatch({
//   type: window.ADD_PLANET,
//   name: 'Pluto, which is totally a planet',
//   id: 5
// })

// store.dispatch({
//   type: window.ADD_MEMBER,
//   name: 'uhuru',
//   rank: 'commander',
//   id: 11111,
//   location: LOCATIONS.PLANET_EARTH
// })

// store.dispatch({
//   type: window.ADD_MEMBER,
//   name: 'crusher',
//   rank: 'chief medical officer',
//   id: 111222211,
//   location: LOCATIONS.PLANET_EARTH
// })



// const transferCrystals = (store, howMany, fromId, toId) => {
//   // getState, see if there are enough crystals

//   const allPlanets = store.getState().planets;
//   const thePlanet = allPlanets.filter( planet => fromId === planet.id)[0]; // GIANT ASSUMPTION HERE!!!

//   // then dispatch two actions
//   if (thePlanet.crystals >= howMany) {
//     store.dispatch({
//       type: actions.REMOVE_CRYSTALS,
//       howMany: howMany,
//       id: fromId
//     });
//     store.dispatch({
//       type: actions.ADD_CRYSTALS,
//       howMany: howMany,
//       id: toId
//     });
//   } else {
//     // don't do nuthin.
//     // stop it.
//   }


// };

// window.transferCrystals = transferCrystals;


ReactDOM.render(
    <Provider store={store}>
        <App/>
</Provider>,
 document.getElementById('root'));
registerServiceWorker();
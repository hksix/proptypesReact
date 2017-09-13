import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {LOCATIONS} from './reducers.js'

import actions from './actions.js';

// import crewMembers from './reducers.js'
import starTrekApp from './reducers.js'
// can slap a new name if using combine reducers then assign that to createStore
import { ships } from './reducers.js'
import { createStore } from 'redux';

const store = createStore(starTrekApp);

window.store = store;
window.ADD_MEMBER = actions.ADD_MEMBER;
window.BEAM_MEMBER = actions.BEAM_MEMBER;
window.ADD_SHIP = actions.ADD_SHIP;


window.TRANSPORTER_ROOM = LOCATIONS.TRANSPORTER_ROOM;
window.PLANET_EARTH= LOCATIONS.PLANET_EARTH;
window.PLANET_THE_SUN= LOCATIONS.PLANET_THE_SUN;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import actions from './actions.js';

import crewMembers from './reducers.js'

import { createStore } from 'redux';

const store = createStore(crewMembers);

window.store = store;
window.ADD_MEMBER = actions.ADD_MEMBER;
window.BEAM = actions.BEAM_MEMBER;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

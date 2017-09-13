import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
    ADD_MEMBER,
    BEAM_MEMBER
} from './actions.js';

import crewMembers from './reducers.js'

import Redux from 'redux';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



import { combineReducers } from 'redux';
import * as actions from './actions';
import * as constants from './Constants';
import undoable, { distinctState} from 'redux-undo';

import _ from 'lodash';
export const LOCATIONS = {
    TRANSPORTER_ROOM: 'TRANSPORTER_ROOM',
    PLANET_EARTH :'PLANET_EARTH',
    PLANET_THE_SUN:'PLANET_THE_SUN',
    UNKNOWN: 'UNKNOWN'
}

const defaultLocationsState = {
  planets: {},
  ships: {}
};

const locations = (state=defaultLocationsState, action) => {
  let newState;
  switch (action.type) {
    case constants.ADD_LOCATION:
      newState = {...state};
      if (action.locationType === constants.LOCATION_SHIP) {
        newState.ships[action.id] = {
          id: action.id,
          name: action.name,
          resources: action.resources
        }
      } else if (action.locationType === constants.LOCATION_PLANET) {
        newState.planets[action.id] = {
          id: action.id,
          name: action.name,
          resources: action.resources
        }
      }
      return newState;
    case constants.ADD_RESOURCE:
      newState = {...state};
      let arrayOfLocations = _.flatten(Object.keys(newState).map( loc => {
        return [].concat(_.values(newState[loc]));
      }))

      let locationThatIWantToChange = arrayOfLocations.filter( loc => loc.id === action.id)[0]; // GIANT ASSumption

      locationThatIWantToChange.resources = {
        ...locationThatIWantToChange.resources,
        [action.resource]:  locationThatIWantToChange.resources[action.resource] + action.howMany
      }
      return newState;
    default:
      return state;
  }
}

/*
const planets = (state=[], action) => {
  switch (action.type) {
    case actions.ADD_PLANET:
      // do something!
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          crystals: 5,
        }
      ];
    case actions.REMOVE_CRYSTALS:
      return state.map( (planet) => (
        (action.id === planet.id)
        ? { ...planet, crystals:  planet.crystals - action.howMany }
        : planet
      ));
    case actions.ADD_CRYSTALS:
      return state.map( (planet) => (
        (action.id === planet.id)
        ? { ...planet, crystals:  planet.crystals + action.howMany }
        : planet
      ));
    default:
      return state;
  }
};
const ships = (state=[], action) => {
  switch (action.type) {
    case actions.ADD_SHIP:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          crystals: 0,
        }
      ]
    case actions.REMOVE_CRYSTALS:
      return state.map( (ship) => (
        (action.id === ship.id)
        ? { ...ship, crystals:  ship.crystals - action.howMany }
        : ship
      ));
    case actions.ADD_CRYSTALS:
      return state.map( (ship) => (
        (action.id === ship.id)
        ? { ...ship, crystals:  ship.crystals + action.howMany }
        : ship
      ));
    default:
      return state;
  }
}
*/

/*
const crewMembers = (state=[], action) => {
  switch (action.type) {
    case actions.ADD_MEMBER:
      // *** Very nice, immutable way to add on to an array!
      // return state.concat({
      //   name: action.name,
      //   rank: action.rank,
      //   id: action.id,
      //   location: action.location
      // });
      // Equivalent to state.concat version,
      // bit using the array spread operator
      return [
        ...state,
        {
          name: action.name,
          rank: action.rank,
          id: action.id,
          location: action.location,
        }
      ]
    case actions.BEAM_MEMBER:
      return state.map( (crewMember) => {
        // if the id matches, then update the location
        if (action.id === crewMember.id) {
          // make a copy(?) of the crewMember
          // but changing the location
          // if (action.location in LOCATIONS) {
          // }
          let newLocation = crewMember.location;
          if (action.location in LOCATIONS) {
            newLocation = action.location;
          }
          // *** Nice looking longer version of Object "cloning"
          // return Object.assign({}, crewMember, {
          //   location: newLocation
          // });
          // This is equivalent to the Object.assign version
          return {
            ...crewMember,
            location: newLocation
          }
          // DO NOT DO THIS THING HERE BELOW.
          // crewMember.location = action.location;
          // return crewMember;
        } else {
          return crewMember;
        }
        // otherwise, just return the crewMember
      });
      break;
    default:
      return state;
  }
}
*/
export default combineReducers({
  locations,
});
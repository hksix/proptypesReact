import { combineReducers } from 'redux'
import * as actions from './actions.js';
import * as constants from './Constants.js';


const defaultLocationState={
    planets: {},
    ships: {},
}

export const LOCATIONS = {
    TRANSPORTER_ROOM: 'TRANSPORTER_ROOM',
    PLANET_EARTH :'PLANET_EARTH',
    PLANET_THE_SUN:'PLANET_THE_SUN',
    UNKNOWN: 'UNKNOWN'
}

const locations = (state=defaultLocationState, action)=>{
    switch(action.type){
        case constants.ADD_LOCATION:
            const newState= {...state};
            if(action.locationType === action.LOCATION_SHIP){
                newState.ships[action.id] = {
                    id: action.id,
                    name: action.name,
                    resources: action.resources
                  }
                } else if (action.locationType === action.LOCATION_PLANET){
                  newState.planets[action.id] = {
                    id: action.id,
                    name: action.name,
                    resources: action.resources
                  }
                }
                return newState;

            
            // return[
            //     ...state,
            //     {
            //         // locationType: location.planets,
            //         name: action.name,
            //         id: action.id,
            //         resources:{
            //             crystals: action.resources},
            //     }
            // ]
        // case actions.MINE_CRYSTALS:
        //     return state.map((mine)=>{
        //         if(action.id === mine.id){
        //             let mined = mine.mines - 1
        //             return {
        //                 ...mine,
        //                 mines: mined
        //             }
        //         }else{
        //             return mine
        //         }
        //     })
        //     case actions.REMOVE_CRYSTALS:
        //     return state.map( (planet) => (
        //       (action.id === planet.id)
        //       ? { ...planet, crystals:  planet.crystals - action.howMany }
        //       : planet
        //     ));
        //   case actions.ADD_CRYSTALS:
        //     return state.map( (planet) => (
        //       (action.id === planet.id)
        //       ? { ...planet, crystals:  planet.crystals + action.howMany }
        //       : planet
        //     ));
        default:
            return state;
    }
}

// const ships = (state=[], action) =>{
//     switch(action.type){
//         case actions.ADD_SHIP:
//             return[
//                 ...state,
//                 {
//                     name: action.name,
//                     id: action.id,
//                     crystals: 0
//                 }
//             ]
//             case actions.REMOVE_CRYSTALS:
//             return state.map( (ship) => (
//               (action.id === ship.id)
//               ? { ...ship, crystals:  ship.crystals - action.howMany }
//               : ship
//             ));
//           case actions.ADD_CRYSTALS:
//             return state.map( (ship) => (
//               (action.id === ship.id)
//               ? { ...ship, crystals:  ship.crystals + action.howMany }
//               : ship
//             ));
//         default:
//             return state;
//     }
    
// }

// const crewMembers = (state=[], action) =>{
//     switch(action.type){
//         case actions.ADD_MEMBER:
//             // return state.concat({
//             //     name: action.name,
//             //     rank: action.rank,
//             //     id: action.id,
//             //     location: action.location
//             // });
//             //  or use the speard operator this is equlivant to state.concat version
//             return[
//                 ...state,
//                 {
//                     name: action.name,
//                     rank: action.rank,
//                     id: action.id,
//                     location: action.location
//                 }
//             ]

//         case actions.BEAM_MEMBER:
//             return state.map( (crewMember)=>{
//                 // if the ID matches, then update location
//                 if(action.id === crewMember.id){
//                     // make a copy of the crewMember but changing the location
//                     let newLocation = crewMember.location;
//                     if(action.location in LOCATIONS){
//                         newLocation = action.location;
//                     }
//                     return {
//                         ...crewMember,
//                         location: newLocation
//                     }
//                 }else{
//                     return crewMember;
//                 }
//                 // otherwise return crewMember
//             });
            
//             case actions.HOLD_LUAU:
//                 return;
//             default:
//                 return state
//     }
// }


export default combineReducers({
    locations,
    // ships,
    // crewMembers,
    
});


// store.dispatch({
//     type: ADD_SHIP,
//     name: "dread",
//     id: 99999,
// })
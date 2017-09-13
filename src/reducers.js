import { combineReducers } from 'redux'
import actions from './actions.js';

export const LOCATIONS = {
    TRANSPORTER_ROOM: 'TRANSPORTER_ROOM',
    PLANET_EARTH :'PLANET_EARTH',
    PLANET_THE_SUN:'PLANET_THE_SUN',
    UNKNOWN: 'UNKNOWN'
}

const ships =(state=[], action) =>{
    switch(action.type){
        case actions.ADD_SHIP:
            return[
                ...state,
                {
                    name: action.name,
                    id: action.id
                }
            ]
        default:
            return state;
    }
    
}

const crewMembers = (state=[], action) =>{
    switch(action.type){
        case actions.ADD_MEMBER:
            // return state.concat({
            //     name: action.name,
            //     rank: action.rank,
            //     id: action.id,
            //     location: action.location
            // });
            //  or use the speard operator this is equlivant to state.concat version
            return[
                ...state,
                {
                    name: action.name,
                    rank: action.rank,
                    id: action.id,
                    location: action.location
                }
            ]

        case actions.BEAM_MEMBER:
            return state.map( (crewMember)=>{
                // if the ID matches, then update location
                if(action.id === crewMember.id){
                    // make a copy of the crewMember but changing the location
                    let newLocation = crewMember.location;
                    if(action.location in LOCATIONS){
                        newLocation = action.location;
                    }
                    return {
                        ...crewMember,
                        location: newLocation
                    }
                }else{
                    return crewMember;
                }
                // otherwise return crewMember
            });
                default:
                    return state
    }
}

export default combineReducers({
    ships,
    crewMembers,
});


// store.dispatch({
//     name: "dread",
//     id: 99999,
// })
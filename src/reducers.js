import actions from './actions.js';

const crewMembers = (state=[], action) =>{
    switch(action.type){
        case actions.ADD_MEMBER:
            return state.concat({
                name: action.name,
                rank: action.rank,
                id: action.id
            });
        case actions.BEAM_MEMBER:
            return;
        default:
            return state
    }
}

export default crewMembers;
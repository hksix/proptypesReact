// Tip #1: Make constatns for your action type strings
/*

this is what we want to produce as an action object
{
    type: ADD_MEMBER,
    name: 'Crusher',
    rank: 'CEO',
    id: 1234,
    location: 'PLANET_THE_SUN'
}

{
    type: BEAM_MEMBER,
    id: 1234,
    location: 'LOCATION_SHIP'
}
    type: ADD_MEMBER,
    name: 'Enterprise',
    id: 9890


*/

const ADD_MEMBER = 'ADD_MEMBER';
const BEAM_MEMBER = 'BEAM_MEMBER';
const ADD_SHIP = 'ADD_SHIP';

export default{
    ADD_MEMBER,
    BEAM_MEMBER,
    ADD_SHIP,
}
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
{
    type: ADD_SHIP,
    name: 'Enterprise',
    id: 9890
}
{
    type: ADD_PLANET,
    name: 'EARTH',
    classification: Barren,
    ID: 10
    mines: 10
}
{
    type:MINE_CRYSTALS,
    id: 10
    //reduce number of crystals
}

*/

const ADD_MEMBER = 'ADD_MEMBER';
const BEAM_MEMBER = 'BEAM_MEMBER';
const ADD_SHIP = 'ADD_SHIP';
const ADD_PLANET = 'ADD_PLANET';
const MINE_CRYSTALS = 'MINE_CRYSTALS';
const HOLD_LUAU = 'HOLD_LUAU';

export default{
    ADD_MEMBER,
    BEAM_MEMBER,
    ADD_SHIP,
    ADD_PLANET,
    MINE_CRYSTALS,
    HOLD_LUAU,
}
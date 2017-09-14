let thingy={
    location:{
        planets:{
            '52':{
                id: 52,
                name: 'Pluto',
                resources:{
                    crystals:1000
                }
            },
            '54':{
                id: 54,
                name: 'Earth',
                resources:{
                    crystals:1000
                }
            },
        },
        ships: {
            '1000':{
                id: 1000,
                name:'Enterprise',
                resources:{
                    cargo:500
                }
            }
        }
    },
    crewMembers:{
        '300':{
            id: 300,
            name: 'Leo',
            rank: 'Capitan',
            location: 52
        }
    }
}


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
{
  type: ADD_PLANET,
  name: 'Earth',
  id: 5432112345
}
{
  type: REMOVE_CRYSTALS,
  howMany: 1,
  id: 1
}
{
    type: REMOVE_RESOURCE,
    resource: 'crystals',
    howMany: 1,
    id: 1
}
{
    type: ADD_RESOURCE,
    resource: 'crystals',
    howMany: 1,
    id: 1
}

*/

const ADD_MEMBER = 'ADD_MEMBER';
const BEAM_MEMBER = 'BEAM_MEMBER';
const ADD_SHIP = 'ADD_SHIP';
const ADD_PLANET = 'ADD_PLANET';
const MINE_CRYSTALS = 'MINE_CRYSTALS';
const HOLD_LUAU = 'HOLD_LUAU';
const ADD_CRYSTALS = 'ADD_CRYSTALS';
const REMOVE_CRYSTALS = 'REMOVE_CRYSTALS';

export default{
    ADD_MEMBER,
    BEAM_MEMBER,
    ADD_SHIP,
    ADD_PLANET,
    MINE_CRYSTALS,
    HOLD_LUAU,
    ADD_CRYSTALS,
    REMOVE_CRYSTALS,
}
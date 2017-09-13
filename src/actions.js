// Tip #1: Make constatns for your action type strings
/*

this is what we want to produce as an action object
{
    type: ADD_MEMBER,
    name: 'Crusher',
    rank: 'CEO',
    id: 1234
}


*/

const ADD_MEMBER = 'ADD_MEMBER';
const BEAM_MEMBER = 'BEAM_MEMBER';

export default{
    ADD_MEMBER,
    BEAM_MEMBER,
}
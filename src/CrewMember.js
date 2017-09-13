import React from 'react';

const CrewMember = ({name, rank, location,clickHandler})=>(
    <div>
        <h2><u>Rank:</u> {rank}<br/> <u>Name:</u> {name}<br/> <u>Location:</u> {location}</h2>
        <button onClick={clickHandler}>BEAM
        </button>
        <hr/>
    </div>
);

export default CrewMember;
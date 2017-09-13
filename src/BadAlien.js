import React from 'react';
import PropTypes from 'prop-types';

const BadAlien = ({name, species, location})=>(
    <div>
        <h2>{name} ({species}) Location: {location}</h2>
    </div>
);

BadAlien.propTypes -{
    name: PropTypes.string.isRequired,
    species: PropTypes.string
};


export default BadAlien;
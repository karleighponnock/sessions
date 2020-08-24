import React from 'react';
import PropTypes from 'prop-types';

const Card = ({imageSlide}) => {
    const {index, picture, city} = imageSlide;
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={city} />
            <div className="details">
                <span className="index">{index+1}</span>
            </div>
        </div>
    )
}

Card.propTypes = {
    imageSlide: PropTypes.object.isRequired
}

export default Card;
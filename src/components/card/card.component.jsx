import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className="card-container">
    <img alt={props.exercise.name}
     src={props.exercise.imgurl}/>
        <h1>{props.exercise.name}</h1>
        <h2>{props.exercise.muscle_targeted}</h2>
        <h2>{props.exercise.equipment_type}</h2>
        <h2>{props.exercise.rating}</h2>
    </div>
);
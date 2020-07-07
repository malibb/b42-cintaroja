/*
import React from 'react';

const Card = () => {
    return ();
};

export default Card;
*/

import React from 'react';
import './Card.css';

const Card = ({ title, src }) => {
    return (<div className="card">
        <h1>{title}</h1>
        <img className="img-card" src={src}/>
    </div>);
};

export default Card;
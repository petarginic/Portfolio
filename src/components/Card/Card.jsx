import React from 'react';
import "./Card.css";

const Card = (props) => {
  return (
    <div className='myCard'>
      <div className="backgroundCard">
        <img src={props.image} alt={props.name} />
      </div>

      <div className="d-flex flex-column cardFooter">

        <h3> {props.title} </h3>
        <p> {props.description}</p>
        <button className='btn btn-outline-primary '>Learn more</button>
     

      </div>
    </div>
  )
}

export default Card
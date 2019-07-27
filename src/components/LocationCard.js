import React from 'react'

LocationCard = props => {

  return (
    <div>
        <img src= {props.image} 
        />
        <div>{props.name}</div>
      <div>{props.type}</div>
      <div>{props.dimension}</div>
      <div>{props.resident}</div>
    </div>

    )
 }
  
  export default LocationCard;
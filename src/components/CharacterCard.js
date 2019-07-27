import React from 'react'


export default function CharacterCard (props) {
  return (
  <div>
    <img alt= 'image' src= {props.image}></img>
    <h1>{props.name}</h1>
    <div>{props.species}</div>
    <div>{props.location.name}</div>
    <div>{props.gender}</div>
  </div>

  )
}



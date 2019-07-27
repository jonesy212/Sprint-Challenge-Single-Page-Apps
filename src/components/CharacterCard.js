import React from 'react'

export default function CharacterCard (props) {
  return (
  <div>
    <div>{props.name}</div>
    <div>{props.species}</div>
    <div>{props.location}</div>
    <div>{props.gender}</div>
  </div>

  )
}

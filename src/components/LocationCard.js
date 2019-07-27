import React from 'react'
import { Card } from 'semantic-ui-react'

function LocationCard (props) {
console.log(props)
  return (
    <Card>
      <div className= "card " >
      <Card.Content header>
          <h3 className= 'dimension'>{props.dimension}</h3>
        </Card.Content>
        <Card.Content header>
          <p className= 'name'>{props.name} - {props.type}</p>
        </Card.Content>
        <Card.Content header>
          <p className= 'residents'>{props.residents.length} residents</p>
        </Card.Content>
      </div>
    </Card>
    )
 }
  
  export default LocationCard




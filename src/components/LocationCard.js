import React from 'react'
import { Card, Label, Segment } from 'semantic-ui-react'

function LocationCard (props) {
console.log(props)
  return (
    <Card className= 'card card-containter2'>
      <div className= "card " >
      <Card.Content header>
          <h3 className= 'dimension'>{props.dimension}</h3>
        </Card.Content>

        <Card.Content header>
          <p className= 'name'>{props.name} - {props.type}</p>
        </Card.Content>

        <Segment padded className='segment-1'>
          <Card.Content header>
            <Label className='label' attached='bottom right'>{props.residents.length} residents </Label>
          </Card.Content>
        </Segment>
      </div>
    </Card>
    )
 }
  
  export default LocationCard



 
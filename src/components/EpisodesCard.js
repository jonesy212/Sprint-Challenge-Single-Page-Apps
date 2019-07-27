import React from 'react'
import { Card } from 'semantic-ui-react'


function EpisodesCard(props) {

    return (

    <Card className= 'card-container'>
        <div className= "card " >
        <Card.Content header>
            <h3 className= 'name'>{props.name}</h3>
        </Card.Content>

        <Card.Content header>
            <p className= 'episode'>{props.episode}</p>
        </Card.Content>
       
        <Card.Content header>
            <p className= 'air-date'>{props.air_date}</p>
        </Card.Content>
        </div>
    </Card>
    )
}

export default EpisodesCard
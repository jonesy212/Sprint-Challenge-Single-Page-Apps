import React, { useEffect, useState} from 'react'
import axios from 'axios'
import LocationCard from './LocationCard'

function LocationsList() {


    const [locations, setLocations] = useState([])
    useEffect(() => {
      
          axios.get("https://rickandmortyapi.com/api/location/")
          
              .then (response => {
                  setLocations(response.data.results);
              })
              .catch(error => {
                console.log("Error: Please reload screen", error)
              })
    }, [])
    return (
        <section className="div.card.ui grid-view">
          {locations.map(location => {
            console.log(location)
            return <LocationCard key={location.id} {...location} />;
            
          })}
          
          </section>
    )
}
export default LocationsList

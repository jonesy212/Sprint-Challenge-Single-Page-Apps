import { useEffect} from 'react';
import axios from 'axios'

export default function LocationsList() {



    useEffect(() => {
        const setCharacters = () => {
          axios.get("https://rickandmortyapi.com/api/locations/")
              .then (response => {
                  setCharacters(response.data);
              })
              .catch(error => {
                console.log("Error: Please reload screen", error)
              })
        }
    })
    return LocationsList
}

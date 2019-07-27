import { useState, useEffect} from 'react';
import axios from 'axios'

function EpisodesList() {

    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
          axios.get("https://rickandmortyapi.com/api/episodes/")
              .then (response => {
                  setEpisodes(response.data.results);
              })
              .catch(error => {
                console.log("Error: Please reload screen", error)
              })
    }, [])

    return EpisodesList
}

export default EpisodesList
import React, { useState, useEffect} from 'react';
import axios from 'axios';

import EpisodesCard from './EpisodesCard'; 

function EpisodesList() {

    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
          axios.get("https://rickandmortyapi.com/api/episode/")
              .then (response => {
                  setEpisodes(response.data.results);
              })
              .catch(error => {
                console.log("Error: Please reload screen", error)
              })
    }, []);

    return (
        <section className="div.card.ui grid-view">
          {episodes.map(episode => {
            console.log(episodes)
            return <EpisodesCard key={episode.id} {...episode} />;
            
          })}
          
          </section>
    )
}

export default EpisodesList
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CharacterCard from './CharacterCard'

 function CharacterList () { 
  // TODO: Add useState to track data from useEffect
      const [characters, setCharacters] = useState([])

  useEffect(() => {
      axios.get("https://rickandmortyapi.com/api/character/")
          .then (response => {
              setCharacters(response.data.results);
          })
          .catch(error => {
            console.log("Error: Please reload screen", error)
          })
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

      //<h2>TODO: `array.map()` over your state here!</h2>

  
return (
  <section className="character-list grid-view">
    {characters.map(character => {
      return <CharacterCard key={character.id} {...character} />;
    })}
  </section>
);
}

export default CharacterList

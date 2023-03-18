import React, { useState, useContext } from "react";
import { DisneyCharacter } from "../disney_character";

export const FavouritesContext = React.createContext<{favourites: Array<DisneyCharacter>, toggleFavourites: (fav: DisneyCharacter) => void}>({favourites: [], toggleFavourites: () => null});

export function useFavourites() {
  return useContext(FavouritesContext)
}

export function FavCharacterProvider ({ children } : { children: React.ReactNode }) {

  const [characterFavourites, setCharacterFavourites] = useState<Array<DisneyCharacter>>([]);

  const toggleFavourites = (fav : DisneyCharacter) => {
      if (!characterFavourites.find((el) => el._id === fav._id)){
          setCharacterFavourites([...characterFavourites, fav])
      }
      else {
        const updatedFavourites = characterFavourites.filter((el) => el._id !== fav._id);
        setCharacterFavourites(updatedFavourites);
      }
    }

  return(     
      <FavouritesContext.Provider value={{favourites: characterFavourites, toggleFavourites: toggleFavourites}}>
          {children}
      </FavouritesContext.Provider>
  )
}

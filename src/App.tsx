import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/header";
import CharacterContainer from "./components/character_container";
import Navigation from "./components/navigation";
import { DisneyCharacter } from "./disney_character";
import { FavCharacterProvider } from "./components/favourites_context";
import FavCharacterContainer from "./components/favourite_character_container";
// import { useFavourites } from "./components/favourites_context";

const App: React.FC = () => {
  
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [characters, setCharacters] = useState<Array<DisneyCharacter>>([]);

  const [displayingFavourites, setDisplayingFavourites] = useState<boolean>(false);

  useEffect(() => {
    const getCharacters = async (pageNumber: number) => {
      const apiResponse = await fetch(`https://api.disneyapi.dev/characters?page=${pageNumber}}`);
      const json = await apiResponse.json() as { data: DisneyCharacter[] };
      setCharacters(json.data);
    };
    getCharacters(currentPage);
  }, [currentPage]);

  return (
    <FavCharacterProvider>
        <div className="page">
          <Header currentPage={currentPage} displayingFavourites={displayingFavourites} />
          <Navigation
            currentPage={currentPage} setCurrentPage={setCurrentPage} displayingFavourites={displayingFavourites} setDisplayFavourites={setDisplayingFavourites} />
          {!displayingFavourites && <CharacterContainer characters={characters} />}
          {displayingFavourites && <FavCharacterContainer />}          
        </div>
    </FavCharacterProvider>
  );
};

export default App;
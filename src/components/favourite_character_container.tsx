import React from "react";
import CharacterContainer from "./character_container";
import { useFavourites } from "./favourites_context";

const FavCharacterContainer: React.FC = () => {

    const {favourites, toggleFavourites} = useFavourites();

  return (  
    <CharacterContainer characters = {favourites} />
  );
};

export default FavCharacterContainer;
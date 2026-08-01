import { useEffect, useState } from "react";

function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const addFavorite = (repo) => {
    if (
      favorites.some(
        (item) => item.id === repo.id
      )
    ) {
      return;
    }

    setFavorites([...favorites, repo]);
  };

  return {
    favorites,
    addFavorite,
  };
}

export default useFavorites;
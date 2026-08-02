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
    if (favorites.find((item) => item.id === repo.id)) {
      alert("Already in favorites!");
      return;
    }

    setFavorites((prev) => [...prev, repo]);

    alert(`${repo.name} added to favorites ❤️`);
  };

  return {
  favorites,
  addFavorite,
  isFavorite: (id) =>
    favorites.some((repo) => repo.id === id),
};


}

export default useFavorites;
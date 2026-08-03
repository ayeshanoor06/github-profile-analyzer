import { useEffect, useState } from "react";
import { toast } from "react-toastify";
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
    toast.info("Already in favorites ❤️");
    return;
  }

  setFavorites((prev) => [...prev, repo]);

  toast.success(`${repo.name} added to favorites ❤️`);
};
   const removeFavorite = (id) => {
  const removedRepo = favorites.find(
    (repo) => repo.id === id
  );

  setFavorites((prev) =>
    prev.filter((repo) => repo.id !== id)
  );

  if (removedRepo) {
    toast.error(
      `${removedRepo.name} removed from favorites`
    );
  }
};
 return {
  favorites,
  addFavorite,
  removeFavorite,
  isFavorite: (id) =>
    favorites.some((repo) => repo.id === id),
};

}

export default useFavorites;
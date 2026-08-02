import useFavorites from "../hooks/useFavorites";

function Favorites() {
   const {
  favorites,
  removeFavorite,
} = useFavorites();

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6">
        ❤️ Favorite Repositories
      </h1>

      {favorites.length === 0 ? (
        <p className="text-gray-500">
          No favorite repositories yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {favorites.map((repo) => (
            <div
              key={repo.id}
              className="bg-white rounded-xl shadow p-5"
            >
              <h2 className="text-xl font-bold">
                {repo.name}
              </h2>

              <p className="text-gray-600 mt-2">
                {repo.description || "No description"}
              </p>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                View on GitHub
              </a>
              <button
  onClick={() => removeFavorite(repo.id)}
  className="ml-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
>
  Remove
</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Favorites;
import SearchBar from "../components/ui/SearchBar";

function Home() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold text-gray-800">
        Welcome 👋
      </h2>

      <p className="text-gray-600 mt-3">
        Search any GitHub username and analyze repositories,
        languages, stars, forks, and contribution statistics.
      </p>

      <SearchBar />
    </section>
  );
}

export default Home;
import useFavorites from "../../hooks/useFavorites";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { favorites } = useFavorites();
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          GitHub Profile Analyzer
        </h1>

        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold"
                : "hover:text-blue-400"
            }
          >
            Home
          </NavLink>

          <NavLink
  to="/favorites"
  className={({ isActive }) =>
    isActive
      ? "text-red-400 font-semibold flex items-center gap-2"
      : "hover:text-red-400 flex items-center gap-2"
  }
>
  <span>❤️ Favorites</span>

  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
    {favorites.length}
  </span>
</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
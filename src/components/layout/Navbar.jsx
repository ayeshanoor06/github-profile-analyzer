import { FaGithub } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <FaGithub className="text-3xl" />

          <div>
            <h1 className="text-xl font-bold">
              GitHub Profile Analyzer
            </h1>

            <p className="text-sm text-gray-400">
              Analyze any GitHub profile
            </p>
          </div>
        </div>

        {/* Right Side */}
        <button
          className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition"
        >
          <MdDarkMode className="text-xl" />
          <span>Theme</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
import { FaMoon, FaSun } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";

function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-11 h-11 rounded-full flex items-center justify-center
      bg-slate-800 hover:bg-slate-700 transition duration-300"
    >
      {darkMode ? (
        <FaSun className="text-yellow-400 text-lg" />
      ) : (
        <FaMoon className="text-slate-200 text-lg" />
      )}
    </button>
  );
}

export default ThemeToggle;
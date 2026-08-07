import { FaStar } from "react-icons/fa";

function RepositorySort({
  value,
  onChange,
}) {
  return (
    <div>

      <label className="block text-slate-300 text-sm font-medium mb-2">
        Sort By
      </label>

      <div className="relative">

        <FaStar className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400 pointer-events-none" />

        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            w-full
            bg-slate-900
            border
            border-slate-700
            rounded-xl
            pl-12
            pr-4
            py-3
            text-white
            outline-none
            focus:border-blue-500
            transition
          "
        >

          <option value="stars">
            Most Stars
          </option>

          <option value="forks">
            Most Forks
          </option>

          <option value="updated">
            Recently Updated
          </option>

          <option value="name">
            Repository Name
          </option>

        </select>

      </div>

    </div>
  );
}

export default RepositorySort;
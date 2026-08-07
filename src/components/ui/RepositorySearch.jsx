import { FaSearch } from "react-icons/fa";

function RepositorySearch({
  value,
  onChange,
}) {
  return (
    <div>
      <label className="block text-slate-300 text-sm font-medium mb-2">
        Search Repository
      </label>

      <div className="relative">

        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

        <input
          type="text"
          placeholder="Search repositories..."
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
            placeholder:text-slate-500
            outline-none
            focus:border-blue-500
            transition
          "
        />

      </div>
    </div>
  );
}

export default RepositorySearch;
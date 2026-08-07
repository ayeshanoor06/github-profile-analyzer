import { FaCode } from "react-icons/fa";

function LanguageFilter({
  languages,
  value,
  onChange,
}) {
  return (
    <div>

      <label className="block text-slate-300 text-sm font-medium mb-2">
        Language
      </label>

      <div className="relative">

        <FaCode className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 pointer-events-none" />

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

          <option value="all">
            All Languages
          </option>

          {languages.map((language) => (
            <option
              key={language}
              value={language}
            >
              {language}
            </option>
          ))}

        </select>

      </div>

    </div>
  );
}

export default LanguageFilter;
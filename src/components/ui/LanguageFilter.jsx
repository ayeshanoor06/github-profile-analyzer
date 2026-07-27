function LanguageFilter({
  languages,
  value,
  onChange,
}) {
  return (
    <div className="mb-6">
      <label className="block mb-2 font-medium">
        Filter by Language
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-lg p-3"
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
  );
}

export default LanguageFilter;
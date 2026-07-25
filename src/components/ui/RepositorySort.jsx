function RepositorySort({ value, onChange }) {
  return (
    <div className="mb-6">
      <label className="block mb-2 font-medium text-gray-700">
        Sort repositories
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3"
      >
        <option value="stars">⭐ Most Stars</option>
        <option value="forks">🍴 Most Forks</option>
        <option value="updated">📅 Recently Updated</option>
        <option value="name">🔤 Name (A–Z)</option>
      </select>
    </div>
  );
}

export default RepositorySort;
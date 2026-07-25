function RepositorySearch({ value, onChange }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search repositories..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default RepositorySearch;
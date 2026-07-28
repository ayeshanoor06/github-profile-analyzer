function RepositoryModal({ repo, onClose }) {
  if (!repo) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-8 max-w-xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold">
          {repo.name}
        </h2>

        <p className="mt-4 text-gray-600">
          {repo.description || "No description available."}
        </p>

        <div className="mt-6 space-y-2">
          <p>⭐ Stars: {repo.stargazers_count}</p>
          <p>🍴 Forks: {repo.forks_count}</p>
          <p>👀 Watchers: {repo.watchers_count}</p>
          <p>💻 Language: {repo.language || "N/A"}</p>
          <p>
            📅 Updated:
            {" "}
            {new Date(repo.updated_at).toLocaleDateString()}
          </p>
        </div>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          View Repository
        </a>

        <button
          onClick={onClose}
          className="ml-4 bg-gray-300 px-5 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default RepositoryModal;
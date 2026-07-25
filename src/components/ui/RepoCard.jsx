import {
  FaStar,
  FaCodeBranch,
  FaEye,
} from "react-icons/fa";

function RepoCard({ repo }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-blue-600">
        {repo.name}
      </h3>

      <p className="text-gray-600 mt-2 min-h-[48px]">
        {repo.description || "No description available."}
      </p>

      <div className="flex flex-wrap gap-5 mt-5 text-gray-700">
        <span className="flex items-center gap-1">
  <FaStar />
  {repo.stargazers_count}
</span>

        <span className="flex items-center gap-1">
  <FaCodeBranch />
  {repo.forks_count}
</span>
<span className="flex items-center gap-1">
  <FaEye />
  {repo.watchers_count}
</span>
      </div>

      {repo.language && (
        <p className="mt-4 text-sm font-medium text-green-600">
          💻 {repo.language}
        </p>
      )}

      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        View on GitHub
      </a>
    </div>
  );
}

export default RepoCard;
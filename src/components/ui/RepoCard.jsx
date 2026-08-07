import {
  FaStar,
  FaCodeBranch,
  FaEye,
  FaHeart,
  FaRegHeart,
  FaCode,
  FaExternalLinkAlt,
} from "react-icons/fa";

function RepoCard({
  repo,
  onFavorite,
  isFavorite,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">

      {/* Repository Name */}
      <div>
        <h3 className="text-2xl font-bold text-blue-400 break-words">
          {repo.name}
        </h3>

        <p className="text-slate-400 mt-3 min-h-[70px] leading-relaxed">
          {repo.description || "No description available."}
        </p>

        {repo.language && (
          <span className="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 text-sm">
            <FaCode />
            {repo.language}
          </span>
        )}
      </div>

      {/* Stats */}
      <div className="flex justify-between mt-6 text-slate-300">

        <span className="flex items-center gap-2">
          <FaStar className="text-yellow-400" />
          {repo.stargazers_count}
        </span>

        <span className="flex items-center gap-2">
          <FaCodeBranch className="text-green-400" />
          {repo.forks_count}
        </span>

        <span className="flex items-center gap-2">
          <FaEye className="text-purple-400" />
          {repo.watchers_count}
        </span>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-8">

        <button
          onClick={(e) => {
            e.stopPropagation();
            onFavorite(repo);
          }}
          className="text-2xl transition-transform hover:scale-125"
        >
          {isFavorite ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-slate-400 hover:text-red-500" />
          )}
        </button>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl text-white transition"
        >
          View
          <FaExternalLinkAlt size={12} />
        </a>

      </div>

    </div>
  );
}

export default RepoCard;
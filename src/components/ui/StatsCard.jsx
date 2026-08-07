function StatsCard({
  title,
  value,
  icon,
}) {
  return (
    <div
      className="
      bg-slate-800
      border
      border-slate-700
      rounded-2xl
      p-6
      transition-all
      duration-300
      hover:border-blue-500
      hover:-translate-y-1
      hover:shadow-xl
      "
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-slate-400 text-sm uppercase tracking-wider">
            {title}
          </p>

          <h3 className="text-4xl font-bold text-white mt-3">
            {value}
          </h3>

        </div>

        <div className="text-3xl text-blue-400">
          {icon}
        </div>

      </div>
    </div>
  );
}

export default StatsCard;
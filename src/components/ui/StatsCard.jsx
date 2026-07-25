function StatsCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-lg transition">
      <h3 className="text-gray-500 text-sm uppercase tracking-wide">
        {title}
      </h3>

      <p className="text-3xl font-bold text-gray-800 mt-2">
        {value}
      </p>
    </div>
  );
}

export default StatsCard;
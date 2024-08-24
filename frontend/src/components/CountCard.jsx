const CountCard = ({ data, label }) => {
  return (
    <div className="flex flex-col items-center justify-center py-2 h-52 gap-2 bg-gray-800 rounded border border-emerald-400">
      <h1 className="text-5xl font-extrabold text-emerald-500">{label}</h1>
      <h2 className="text-5xl font-bold text-emerald-600">{data}</h2>
    </div>
  );
};

export default CountCard;

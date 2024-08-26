const CountCard = ({ data, label }) => {
  return (
    <div className="flex flex-col items-center justify-center py-2 h-40 text-white gap-2 bg-gradient-to-r from-emerald-400 to-emerald-600 hover:-translate-y-1 transition-all ease-in-out rounded border border-emerald-400">
      <h1 className="text-5xl font-extrabold">{label}</h1>
      <h2 className="text-5xl font-bold">{data}</h2>
    </div>
  );
};

export default CountCard;

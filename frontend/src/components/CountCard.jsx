/* eslint-disable react/prop-types */
const CountCard = ({ data, label }) => {
  return (
    <div className="flex flex-col items-center justify-center py-2 h-52 gap-2">
      <h1 className="text-5xl font-extrabold">{label}</h1>
      <h2 className="text-5xl font-bold">{data}</h2>
    </div>
  );
};

export default CountCard;

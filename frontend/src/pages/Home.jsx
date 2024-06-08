import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:3000/", { mode: "cors" });
        const someData = await res.json();
        setData(someData.data);
        setLoading(false);
        console.log(someData);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      {loading && (
        <h2 className="absolute flex items-center justify-center  inset-0 text-3xl bg-slate-50 z-50">
          loading
        </h2>
      )}
      {data && (
        <div className="h-full bg-red-500 flex-1">
          <h1 className="text-3xl font-bold underline">{data.booksCount}</h1>
        </div>
      )}
    </>
  );
};

export default Home;

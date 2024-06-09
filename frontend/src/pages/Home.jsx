import { useState, useEffect } from "react";
import CountCard from "../components/CountCard";

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
    <div className="relative">
      {loading && (
        <h2 className="absolute flex items-center justify-center  inset-0 text-3xl bg-slate-50 z-50">
          loading
        </h2>
      )}
      {data && (
        <section className="flex flex-col flex-1 ">
          <div className="flex items-center justify-center p-5 w-4/5 mx-auto">
            <h1 className="text-4xl font-bold">Bookstore</h1>
          </div>
          <div className="grid grid-cols-3 flex-1 w-4/5 mx-auto px-5 gap-2 pt-10">
            <CountCard data={data.booksCount} label={"Books"} />
            <CountCard data={data.authorsCount} label={"Authors"} />
            <CountCard data={data.genreCount} label={"Genres"} />
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";

import "./App.css";

function App() {
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
      {loading && <h2>loading</h2>}
      {data && <h1>{data.booksCount}</h1>}
    </>
  );
}

export default App;

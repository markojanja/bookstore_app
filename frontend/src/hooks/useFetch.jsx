import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const res = await fetch(url, { mode: "cors" });
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData(url);
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;

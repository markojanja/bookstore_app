import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const res = await fetch(url, { mode: 'cors' });
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

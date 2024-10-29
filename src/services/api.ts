import { useEffect, useRef, useState } from "react";

export const useFetchData = (url: string) => {
  const [data, setData] = useState(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) {
      return;
    }
    hasFetched.current = true;
    (async () => {
      try {
        const response: Response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error(err);
      } 
    })();
  }, [url])
  

  return data;
}

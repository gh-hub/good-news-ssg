"use client";
import { useState, useEffect, useRef } from "react";

interface UseFetchResult<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
}

function useFetch<T = unknown>(
  url: string,
  options?: RequestInit
): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const hasMounted = useRef(false);
  
  useEffect(() => {
    hasMounted.current = true;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result: T = await response.json();
        if (hasMounted.current) {
          setData(result);
          setError(null);
        }
      } catch (err: any) {
        if (hasMounted.current) {
          setError(err.message);
          setData(null);
        }
      } finally {
        if (hasMounted.current) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      hasMounted.current = false;
    };
  }, [url, options]);

  return { data, error, isLoading };
}

export default useFetch;

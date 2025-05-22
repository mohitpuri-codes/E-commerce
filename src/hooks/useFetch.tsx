import type { AxiosError } from "axios";
import { useEffect, useRef, useState } from "react";

interface UseFetchProps<T> {
  enabled: boolean;
  fn: () => Promise<T>;
}

function useFetch<T>({ fn, enabled }: UseFetchProps<T>) {
  const [isLoading, setISLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [hasError, setHasError] = useState<AxiosError | Error | null>(null);

  const fnRef = useRef(fn);

  useEffect(() => {
    async function fetchData() {
      try {
        setISLoading(true);
        setHasError(null);
        const data = await fnRef.current();
        setData(data);
      } catch (error) {
        if (error instanceof Error) setHasError(error);
      } finally {
        setISLoading(false);
      }
    }
    if (enabled) {
      fetchData();
    }
  }, [enabled]);
  return {
    isLoading,
    data,
    hasError,
  };
}

export default useFetch;

import { AxiosError } from "axios";
import { useCallback, useEffect, useRef, useState } from "react";

interface UseFetchProps<T> {
  enabled: boolean;
  fn: (value?: string) => Promise<T>;
}

function useFetch<T>({ fn, enabled }: UseFetchProps<T>) {
  const [isLoading, setISLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [hasError, setHasError] = useState<AxiosError | Error | null>(null);

  const fnRef = useRef(fn);

  const memoizedRefetch = useCallback(
    async (value?: string) => {
      if (enabled) {
        try {
          setISLoading(true);
          setHasError(null);
          const response = await fnRef.current(value); //single await, install axios
          if (response instanceof AxiosError) {
            setHasError(response);
          }
          setData(response);
          setISLoading(false);
        } catch (err) {
          if (err instanceof AxiosError) {
            setHasError(err);
          }
        }
      }
    },
    [enabled]
  );

  useEffect(() => {
    memoizedRefetch();
  }, [memoizedRefetch]);
  return {
    isLoading,
    memoizedRefetch,
    data,
    hasError,
  };
}

export default useFetch;

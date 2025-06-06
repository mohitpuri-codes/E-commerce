import { AxiosError } from "axios";
import { useCallback, useEffect, useRef, useState } from "react";

interface UseFetchProps<T> {
  enabled: boolean;
  fn: () => Promise<T>;
  queryKey: Array<any>;
}

function useFetch<T>({ fn, enabled, queryKey }: UseFetchProps<T>) {
  const [isLoading, setISLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [hasError, setHasError] = useState<AxiosError | Error | null>(null);

  const fnRef = useRef(fn);
  const queryStr = queryKey.join();
  const queryRef = useRef(queryStr);

  const memoizedRefetch = useCallback(async () => {
    if (enabled) {
      try {
        setISLoading(true);
        setHasError(null);
        const response = await fnRef.current();

        //single await, install axios

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
  }, [enabled]);

  useEffect(() => {
    if (queryStr !== queryRef.current) {
      fnRef.current = fn;
      queryRef.current = queryStr;
    }
    memoizedRefetch();
  }, [memoizedRefetch, queryStr]);
  // join query key to string
  return {
    isLoading,
    memoizedRefetch,
    data,
    hasError,
  };
}

export default useFetch;

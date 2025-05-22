import { AxiosError } from "axios";
import { useRef, useState } from "react";
import type { APIErrorResponse } from "../types/APITypes";

interface useFetchMutationProps<T, K> {
  fn: (reqBody: K) => Promise<T>;
}

interface FetchOptions<T> {
  onSuccess?: (data: T) => void;
}

function useFetchMutation<T, K>({ fn }: useFetchMutationProps<T, K>) {
  const fnRef = useRef(fn);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError<APIErrorResponse> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchData(args: K, options?: FetchOptions<T>) {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fnRef.current(args);

      if (response instanceof AxiosError) {
        setError(response);
      } else {
        setData(response);
        options?.onSuccess?.(response);
      }

      return response;
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return {
    mutate: fetchData,
    data,
    error,
    isLoading,
  };
}

export default useFetchMutation;

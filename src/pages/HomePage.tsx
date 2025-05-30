import { apipaths } from "../config/apiPath";
import { axiosInstance } from "../config/axios.config";
import useFetch from "../hooks/useFetch";
import type { UsersAPIResponse } from "../types/APITypes";
import ErrorMessage from "../components/ErrorMessage";
import UserListing from "../components/UserListing";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";

function HomePage() {
  const [searchParams] = useSearchParams();

  // Get a specific search parameter
  const category = searchParams.get("search") || "";

  const {
    data,
    hasError,
    isLoading,
    memoizedRefetch: refetch,
  } = useFetch<UsersAPIResponse>({
    fn: (searched) =>
      axiosInstance.get(apipaths.user.users(), {
        params: { search: searched },
      }),
    enabled: true,
  });

  useEffect(() => {
    refetch(category);
  }, [category, refetch]);

  if (isLoading) return <p className="text-center mt-5">Loading users...</p>;

  if (hasError) return <ErrorMessage>Failed to load users.</ErrorMessage>;

  if (!data) {
    console.error("Error in fetching data");
    return;
  }
  return (
    <div className="flex ">
      <Sidebar />

      <UserListing productData={data} />
    </div>
  );
}

export default HomePage;

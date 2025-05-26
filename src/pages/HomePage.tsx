import { apipaths } from "../config/apiPath";
import { axiosInstance } from "../config/axios.config";
import useFetch from "../hooks/useFetch";
import type { UsersAPIResponse } from "../types/APITypes";
import ErrorMessage from "../components/ErrorMessage";
import UserListing from "../components/UserListing";

function HomePage() {
  const { data, hasError, isLoading } = useFetch<UsersAPIResponse>({
    fn: () => axiosInstance(apipaths.user.users()),
    enabled: true,
  });

  if (isLoading) return <p className="text-center mt-5">Loading users...</p>;

  if (hasError) return <ErrorMessage>Failed to load users.</ErrorMessage>;

  return (
    <div className="flex">
      <UserListing productData={data!} />
    </div>
  );
}

export default HomePage;

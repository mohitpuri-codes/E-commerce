import { Link } from "react-router-dom";
import { apipaths } from "../config/apiPath";
import { axiosInstance } from "../config/axios.config";
import useFetch from "../hooks/useFetch";
import type { UsersAPIResponse } from "../types/APITypes";
import UserCard from "../components/UserCard";
import ErrorMessage from "../components/ErrorMessage";

function HomePage() {
  const { data, hasError, isLoading } = useFetch<UsersAPIResponse>({
    fn: () => axiosInstance(apipaths.user.users()),
    enabled: true,
  });

  if (isLoading) return <p className="text-center mt-5">Loading users...</p>;

  if (hasError) return <ErrorMessage>Failed to load users.</ErrorMessage>;

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5 p-5 max-w-[900px] mx-auto">
      {data?.data.data.map((dataItem) => (
        <Link
          to={`${dataItem.id}`}
          key={dataItem.id}
          className="flex flex-col p-4 rounded-xl bg-white text-gray-800 no-underline shadow-md transition-transform transition-shadow duration-200 ease-in-out
            hover:-translate-y-1 hover:shadow-lg"
        >
          <UserCard user={dataItem} />
        </Link>
      ))}
    </div>
  );
}

export default HomePage;

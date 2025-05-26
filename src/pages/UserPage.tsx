import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { axiosInstance } from "../config/axios.config";
import { apipaths } from "../config/apiPath";
import type { User } from "../types/UsersTypes";
import type { LoggedInAPIResponse } from "../types/APITypes";
import { CART } from "../constants/globals.constants";

type Params = {
  id: string;
};

function UserPage() {
  const { id } = useParams<Params>();
  const { data, hasError, isLoading } = useFetch<LoggedInAPIResponse<User>>({
    fn: () => axiosInstance(apipaths.user.userById(Number(id!))),
    enabled: true,
  });

  if (isLoading) {
    return <p className="text-center mt-8">Loading user details...</p>;
  }

  if (hasError || !data?.data.data) {
    return <p className="text-center mt-8 text-red-600">{hasError?.message}</p>;
  }

  const user = data.data.data;
  const price = user.mobileNumber;

  function handleAddToCart() {
    const cartItem = JSON.parse(localStorage.getItem(CART)!);
    let cart: User[];
    if (!cartItem) {
      cart = [];
    } else {
      cart = cartItem;
    }

    // if(cart.)
    cart.push(user);
    localStorage.setItem(CART, JSON.stringify(cart));
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-5 bg-white rounded-lg shadow-md font-sans">
      <h1 className="mb-6 text-gray-900 text-2xl font-semibold">User Info</h1>

      <div className="mb-4">
        <strong className="block mb-1.5 text-gray-600">Display Name:</strong>
        <span className="text-lg">{user.displayName}</span>
      </div>

      <div className="mb-4">
        <strong className="block mb-1.5 text-gray-600">Username:</strong>
        <span className="text-lg">{user.username}</span>
      </div>

      <div className="mb-6">
        <strong className="block mb-1.5 text-gray-600">Mobile Number:</strong>
        <span className="text-lg">{user.mobileNumber}</span>
      </div>
      <div className="mb-6">
        <strong className="block mb-1.5 text-gray-600">Price:</strong>
        <span className="text-lg">₹ {price.slice(0, 4)}</span>
      </div>

      <button
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold text-base transition-colors duration-300 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default UserPage;

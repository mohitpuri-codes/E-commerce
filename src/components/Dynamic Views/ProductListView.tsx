import { Link } from "react-router-dom";
import type { UsersAPIResponse } from "../../types/APITypes";
import UserCard from "../UserCard";

interface ProductGridViewProps {
  productData: UsersAPIResponse;
}

function ProductListView({ productData }: ProductGridViewProps) {
  const users = productData?.data?.data || [];

  return (
    <div className="grid grid-cols-1 gap-5 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      {users.length > 0 ? (
        users.map((productDataItem) => (
          <Link
            to={`${productDataItem.id}`}
            key={productDataItem.id}
            className="flex flex-col p-4 rounded-xl bg-white text-gray-800 no-underline shadow-md transition-transform transition-shadow duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          >
            <UserCard user={productDataItem} />
          </Link>
        ))
      ) : (
        <div className="text-center text-gray-500 col-span-full">
          No user found.
        </div>
      )}
    </div>
  );
}

export default ProductListView;

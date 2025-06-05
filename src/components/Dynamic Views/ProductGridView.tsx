import { Link } from "react-router-dom";
import UserCard from "../UserCard";
import type { UsersAPIResponse } from "../../types/APITypes";

interface ProductGridViewProps {
  productData: UsersAPIResponse;
}

function ProductGridView({ productData }: ProductGridViewProps) {
  const users = productData?.data?.data;

  return (
    <div className="p-5 w-full">
      {users.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {users.map((productDataItem) => (
            <Link
              to={`${productDataItem.id}`}
              key={productDataItem.id}
              className="flex flex-col p-4 rounded-xl bg-white text-gray-800 no-underline shadow-md transition-transform transition-shadow duration-200 ease-in-out
                hover:-translate-y-1 hover:shadow-lg"
            >
              <UserCard user={productDataItem} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg">No user found.</div>
      )}
    </div>
  );
}

export default ProductGridView;

import { Link } from "react-router-dom";
import UserCard from "../UserCard";
import type { UsersAPIResponse } from "../../types/APITypes";

interface ProductGridViewProps {
  productData: UsersAPIResponse;
}

function ProductGridView({ productData }: ProductGridViewProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5 p-5 max-w-[900px] mx-auto">
      {productData?.data.data.map((productDataItem) => (
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
  );
}

export default ProductGridView;

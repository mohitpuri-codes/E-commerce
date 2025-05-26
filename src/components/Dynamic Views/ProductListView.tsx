import { Link } from "react-router-dom";
import type { UsersAPIResponse } from "../../types/APITypes";
import UserCard from "../UserCard";

interface ProductGridViewProps {
  productData: UsersAPIResponse;
}

function ProductListView({ productData }: ProductGridViewProps) {
  return (
    <div className="flex flex-col gap-5 p-5 max-w-[900px] mx-auto w-[450px]">
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

export default ProductListView;

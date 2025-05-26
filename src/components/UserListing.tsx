import { Link } from "react-router-dom";
import { clsx } from "../utils/clsx";
import UserCard from "./UserCard";
import type { UsersAPIResponse } from "../types/APITypes";
import { useState } from "react";

interface UserListingProps {
  productData: UsersAPIResponse;
}

function UserListing({ productData }: UserListingProps) {
  const [dynamicGridView, setDynamicGridView] = useState(true);
  function handleSelectView() {
    setDynamicGridView((prev) => !prev);
  }

  return (
    <div className="flex flex-col p-5 max-w-[900px] mx-auto">
      <div className="flex gap-2 items-center ml-2 justify-center">
        <label htmlFor="Grid-view">Grid View</label>
        <input
          type="radio"
          name="Select-view"
          defaultChecked
          id="Grid-view"
          onChange={handleSelectView}
        />
        <label htmlFor="List-view">List View</label>
        <input
          type="radio"
          name="Select-view"
          id="List View"
          onChange={handleSelectView}
        />
      </div>
      <div
        className={clsx({
          "grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5 p-5 max-w-[900px] mx-auto":
            dynamicGridView,
          "flex flex-col gap-5 p-5 max-w-[900px] mx-auto w-[450px]":
            !dynamicGridView,
        })}
      >
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
    </div>
  );
}

export default UserListing;

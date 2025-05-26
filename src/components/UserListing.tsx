import type { UsersAPIResponse } from "../types/APITypes";
import { useState } from "react";
import ProductGridView from "./Dynamic Views/ProductGridView";
import ProductListView from "./Dynamic Views/ProductListView";

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
      {dynamicGridView ? (
        <ProductGridView productData={productData} />
      ) : (
        <ProductListView productData={productData} />
      )}
    </div>
  );
}

export default UserListing;

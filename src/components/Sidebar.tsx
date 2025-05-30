function Sidebar() {
  return (
    <div className="fixed top-15 left-0 h-screen  w-64 p-4 bg-gray-50 border-r border-gray-200 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">
          Sort by Price
        </h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              id="price-high-low"
              name="price-sort"
              type="radio"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="price-high-low"
              className="ml-2 text-sm text-gray-700"
            >
              High to Low
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="price-low-high"
              name="price-sort"
              type="radio"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="price-low-high"
              className="ml-2 text-sm text-gray-700"
            >
              Low to High
            </label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Date Range</h3>
        <div className="space-y-3">
          <div>
            <label
              htmlFor="start-date"
              className="block text-xs text-gray-500 mb-1"
            >
              From
            </label>
            <input
              id="start-date"
              type="date"
              className="w-full p-2 border border-gray-300 rounded text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="end-date"
              className="block text-xs text-gray-500 mb-1"
            >
              To
            </label>
            <input
              id="end-date"
              type="date"
              className="w-full p-2 border border-gray-300 rounded text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

const SkeletonProduct = () => {
  return (
    <div className="flex font-sans mb-3 animate-pulse">
      <div className="flex-none w-56 relative ">
        <div className="bg-gray-400 absolute inset-0 w-full h-full object-cover rounded-lg" />
      </div>
      <div className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto font-medium bg-gray-400 text-gray-400 rounded mr-3">
            {/* {val.item} */}
          </h1>
          <div className="w-3/4 flex-none mt-2 order-1 text-3xl font-bold bg-gray-400 text-gray-400 rounded">
            {/* {val.price.toLocaleString("id-ID", {
                         style: "currency",
                         currency: "IDR",
                         minimumFractionDigits: 0,
                       })} */}
          </div>
          {/* Skeleton Category */}
          <div className="text-sm font-medium bg-gray-400 text-gray-400 rounded">
            {/* {val.category} */}
          </div>
        </div>
        <div className="flex items-baseline  mb-6 pb-6 border-b border-slate-200"></div>
        {/* Skeleton Button */}
        <div className="flex space-x-4 mb-5 text-sm font-medium">
          <div className="flex-auto flex space-x-4">
            <div className="h-10 px-6 text-xs font-semibold rounded-full bg-gray-400  text-gray-400">
              Beli Sekarang
            </div>
            <div className="h-10 px-6 text-xs font-semibold rounded-full border bg-gray-400 text-gray-400">
              Add To Bag
            </div>
          </div>
        </div>
        {/* Skeleton Text Footer */}
        <p className="text-sm bg-gray-400 rounded text-gray-400">
          Pengiriman gratis untuk semua pesanan di Indonesia.
        </p>
      </div>
    </div>
  );
};

export default SkeletonProduct;

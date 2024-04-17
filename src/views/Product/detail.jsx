import SkeletonProduct from "@/components/fragments/skeletonProduct";
import Head from "next/head";

const DetailProductViews = ({ data, handleButtonBack }) => {
  return (
    <div>
      <Head>
        <title>Detail Product</title>
      </Head>

      <button
        class="h-8 px-5 text-sm font-semibold rounded-md bg-gray-600 text-white hover:bg-gray-800"
        onClick={() => handleButtonBack()}
      >
        Kembali
      </button>
      <div>
        <h1 className="text-xl font-bold text-center mt-5">
          Detail Product Page
        </h1>
        <div className="mt-10">
          <div className="w-1/2 flex font-sans mb-3 mx-auto">
            <div className="flex-none w-56 relative overflow-hidden">
              <img
                src={data.image}
                alt={data.item}
                className="absolute inset-0 w-full h-full object-cover rounded-lg hover:scale-125 ease-in duration-150"
                loading="lazy"
              />
            </div>
            <form className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto font-medium text-slate-900">
                  {data.item}
                </h1>
                <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
                  {data.price &&
                    data.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    })}
                </div>
                <div className="text-sm font-medium text-slate-400">
                  {data.category}
                </div>
              </div>
              <div className="flex items-baseline  mb-6 pb-6 border-b border-slate-200"></div>
              <div className="flex space-x-4 mb-5 text-sm font-medium">
                <div className="flex-auto flex space-x-4">
                  <button
                    className="h-10 px-6 text-xs font-semibold rounded-full bg-violet-600 hover:bg-violet-800 text-white"
                    type="submit"
                  >
                    Beli Sekarang
                  </button>
                  <button
                    className="h-10 px-6 text-xs font-semibold rounded-full border border-slate-200 hover:border-slate-500 text-slate-900"
                    type="button"
                  >
                    Add to bag
                  </button>
                </div>
              </div>
              <p className="text-sm text-slate-500">
                Pengiriman gratis untuk semua pesanan di Indonesia.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProductViews;

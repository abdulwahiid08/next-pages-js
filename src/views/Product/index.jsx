import SkeletonProduct from "@/components/fragments/skeletonProduct";
import Head from "next/head";
import Link from "next/link";

const ProductViews = ({ data, isLoading }) => {
  return (
    <div>
      <Head>
        <title>Product</title>
      </Head>
      <main>
        {/* Dynamic Route */}
        {/* <div className="flex justify-between">
          {navData.map((val, idx) => (
            <div classNameName="mx-2" key={idx}>
              <Link href={`/product/${val}`}>{val}</Link>
            </div>
          ))}
        </div>
        <hr /> */}

        <div className="text-xl font-bold text-center">
          <h1>Product Page</h1>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-10">
          {data.length > 0
            ? data.map((val, idx) => (
                <div className="flex font-sans mb-3" key={idx}>
                  <div className="flex-none w-56 relative overflow-hidden">
                    <Link href={`/product/${val.id}`} key={idx}>
                      <img
                        src={val.image}
                        alt={val.item}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg hover:scale-125 ease-in duration-150"
                        loading="lazy"
                      />
                    </Link>
                  </div>
                  <form className="flex-auto p-6">
                    <div className="flex flex-wrap">
                      <h1 className="flex-auto font-medium text-slate-900">
                        {val.item}
                      </h1>
                      <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
                        {val.price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                        })}
                      </div>
                      <div className="text-sm font-medium text-slate-400">
                        {val.category}
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
              ))
            : Array.from({ length: 2 }).map((val, idx) => <SkeletonProduct />)}
        </div>
      </main>
    </div>
  );
};

export default ProductViews;

import Head from "next/head";
import Link from "next/link";

const ProductViews = () => {
  const data = ["Nike", "Adidas", "Puma"];

  return (
    <>
      <div>
        <Head>
          <title>Product</title>
        </Head>

        <h1>Product Page</h1>
        {data.map((val, idx) => (
          <div className="mx-2" key={idx}>
            <Link href={`/product/${val}`}>{val}</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductViews;

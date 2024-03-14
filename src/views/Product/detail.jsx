import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const DetailProductViews = () => {
  const req = useRouter();

  /* Navigation */
  const handleButtonBack = () => {
    req.push("/product"); // Redirect
  };

  return (
    <div>
      <Head>
        <title>Detail Product</title>
      </Head>

      <button onClick={() => handleButtonBack()}>Kembali</button>
      <h1>Detail Product Page</h1>
      <h3>Product: {req.query.id}</h3>
    </div>
  );
};

export default DetailProductViews;

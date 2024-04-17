import initFetcher from "@/config/swr/fetch";
import DetailProductViews from "@/views/Product/detail";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

const ProductDetailPage = ({ product }) => {
  const req = useRouter();

  /* Client Side Rendering */
  /* Fecthing data by id */
  // const { data, error, isLoading } = useSWR(
  //   `/api/product/${req.query.id}`,
  //   initFetcher
  // );

  /* Navigation */
  const handleButtonBack = () => {
    req.push("/product"); // Redirect
  };

  return (
    <>
      {/* Client Side */}
      {/* <DetailProductViews
        data={isLoading || data?.data}
        handleButtonBack={handleButtonBack}
      /> */}

      {/* Server Side */}
      <DetailProductViews data={product} handleButtonBack={handleButtonBack} />
    </>
  );
};

export default ProductDetailPage;

/* Server Side Rendering */
export const getServerSideProps = async ({ params }) => {
  const model = await fetch(`http://localhost:3000/api/product/${params.id}`); // Url harus lengkap dengan http//.... dst
  const data = await model.json();

  // Return sebuah props

  return {
    props: {
      product: data.data,
    },
  };
};

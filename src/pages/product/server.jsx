import ProductViews from "@/views/Product";

const ProductPage = ({ products }) => {
  return <ProductViews data={products} />;
};

export default ProductPage;

/* Server Side Rendering */
export const getServerSideProps = async () => {
  const model = await fetch("http://localhost:3000/api/product"); // Url harus lengkap dengan http//.... dst
  const data = await model.json();

  // Return sebuah props
  return {
    props: {
      products: data.data,
    },
  };
};

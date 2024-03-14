import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <Head>
        <title>About Product</title>
      </Head>

      <h1>Hello About Page</h1>
      <Link href="/product">Product</Link>
    </div>
  );
};

export default About;

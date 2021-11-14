import Head from "next/head";
import StoreComp from "../../src/components/User/Books";

const Store = () => {
  return (
    <>
      <Head>
        <title>Store</title>
        <link rel="icon" href="/dklogo.svg" />
      </Head>
      <StoreComp />
    </>
  );
};

export default Store;

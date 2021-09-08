import Head from "next/head";
import SignInComp from "../../../src/components/User/Auth/SignIn";

const SignIn = () => {
  return (
    <>
      <Head>
        <title>Sign in</title>
        <link rel="icon" href="/icons/dklogo.svg" />
      </Head>
      <SignInComp />
    </>
  );
};

export default SignIn;

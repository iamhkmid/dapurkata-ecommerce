import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: "/u/account",
      permanent: true,
    },
  };
};
const User = () => {
  return null;
};

export default User;

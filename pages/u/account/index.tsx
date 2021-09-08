import { GetStaticProps } from "next";

// export const getStaticProps: GetStaticProps = async (context) => {
//   return {
//     redirect: {
//       destination: "/auth",
//       permanent: false,
//     },
//     // props: {},
//     // revalidate: 1,
//   };
// };
const account = () => {
  return <div>account</div>;
};

export default account;

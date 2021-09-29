import AuthContextProvider from "../src/contexts/AuthCtx";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import Head from "next/head";
import ThemeContextProvider from "../src/contexts/ThemeCtx";
import "../styles/font.css";
import ApolloClientProvider from "../src/contexts/ApolloClientCtx";
import { WithAuth } from "../src/services/WithAuth";
import { CookiesProvider } from "react-cookie";
import { AppProps } from "next/dist/shared/lib/router/router";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/icons/dklogo.svg" />
      </Head>
      <CookiesProvider>
        <ThemeContextProvider>
          <ApolloClientProvider>
            <AuthContextProvider>
              <WithAuth>
                <Component {...pageProps} />
              </WithAuth>
            </AuthContextProvider>
          </ApolloClientProvider>
        </ThemeContextProvider>
      </CookiesProvider>
    </>
  );
}

export default MyApp;

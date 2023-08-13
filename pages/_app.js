import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/header";
import Aside from "../components/aside";
import { memo } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ansuman</title>
        <link rel="icon" type="image/x-icon" href="/fev.png" />
      </Head>
      <Header menu={pageProps.menu} />
      <section className="container mx-auto lg:px-40 pb-10 md:flex ">
        <Aside profile={pageProps.profile} />
        <Component {...pageProps} />
      </section>
    </>
  );
}

export default memo(MyApp);

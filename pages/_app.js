import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/header";
import Aside from "../components/aside";
import { usePathname } from "next/navigation";

function MyApp({ Component, pageProps }) {
  const urlPath = usePathname();

  const [menuData] = pageProps.menu;

  return (
    <>
      <Head>
        {menuData.items.map((urlTitle, i) => {
          return urlPath == urlTitle.slug.current ? (
            <title key={i}>{urlTitle.name} Ansuman</title>
          ) : null;
        })}

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

export default MyApp;

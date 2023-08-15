import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/header";
import Aside from "../components/aside";
import { usePathname } from "next/navigation";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const urlPath = usePathname();
  const router = useRouter();
  const [menuData] = pageProps.menu;
  useEffect(() => {
    // Pass pathname to MyDocument using a prop
    const pathname = router.pathname;
    document.documentElement.setAttribute('data-pathname', pathname);
  }, [router.pathname]);

  useEffect(() => {
    // Set lang attribute on the html tag
    document.documentElement.lang = 'en';
  }, []);

  return (
    <>
      <Head>
        {menuData?.items?.map((urlTitle, i) => {
          return urlPath == urlTitle?.slug?.current ? (
            <title key={i}>{urlTitle?.name}</title>
          ) : null;
        })}

        <link rel="icon" type="image/x-icon" href="/fev.png" />
      </Head>
      <Header menu={pageProps?.menu} />
      <section className="container mx-auto lg:px-40 pb-10 md:flex ">
        <Aside profile={pageProps?.profile} />
        <Component {...pageProps} />
      </section>
    </>
  );
}

export default MyApp;

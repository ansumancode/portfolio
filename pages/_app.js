import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/header";
import Aside from "../components/aside";
import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  LiaArrowDownSolid,
} from "react-icons/lia";

function MyApp({ Component, pageProps }) {
  const urlPath = usePathname();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true)
   
 useEffect(()=>{
  window.addEventListener('scroll', listenToScroll)
 }, [])

  useEffect(() => {
    // Set lang attribute on the html tag
    document.documentElement.lang = 'en';

    // Pass pathname to MyDocument using a prop
    const pathname = router.pathname;
    document.documentElement.setAttribute('data-pathname', pathname);
  }, [router.pathname]);

  if (!Array.isArray(pageProps?.menu)) {
    return <div>Invalid menu data</div>;
  }
  const [menuData] = pageProps?.menu;

  const downFunction=()=>{
    window.scrollTo({top:600, left:0, behavior:"smooth"})
  }

  const listenToScroll = ()=>{
    let heightToHidden = 200;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if(winScroll < heightToHidden){
      setIsVisible(true)
    }else{
      setIsVisible(false)
    }
  }
 
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
      {
        isVisible && (
          <div onClick={downFunction} className=" animate-bounce fixed bottom-4 right-4 z-50 text-lg border-2 outline-none text-white cursor-pointer p-2 rounded-full md:hidden" title="Go to top"><LiaArrowDownSolid /></div>
        )
      }
      
    </>
  );
}

export default MyApp;

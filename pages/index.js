import { headerMenu, profileData, aboutAndSkills } from "./api/api";
import HomeComponent from "../components/HomeComponent";
import { createContext } from "react";


const createDataContext = createContext();

export default function Home({ aboutAndInformation }) {
  
  return (
    <createDataContext.Provider value={aboutAndInformation}>
      <HomeComponent />
    </createDataContext.Provider>
  );
}

export {createDataContext}

export async function getStaticProps() {
  const menu = await headerMenu();
  const profile = await profileData();
  const aboutAndInformation = await aboutAndSkills();
  return {
    props: {
      menu,
      profile,
      aboutAndInformation,
    },
  };
}

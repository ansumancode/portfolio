import { headerMenu, profileData } from "../api/api";
import HomeComponent from "../../components/HomeComponent";

const contact = () => {
  return (
    <HomeComponent />
  )
}

export async function getStaticProps() {
  const menu = await headerMenu();
  const profile = await profileData();
  return {
    props: {
      menu,
      profile,
    },
  };
}

export default contact

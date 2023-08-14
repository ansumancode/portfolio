import { headerMenu, profileData } from "../api/api";
import ContactMe from "../../components/contactMe";

const contact = () => {
  return (
    <ContactMe />
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


import { headerMenu, profileData } from "../api/api";
import Research from "../../components/research"
const Index = () => {
  return (
    <Research />
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

export default Index

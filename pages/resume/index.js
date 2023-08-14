
import { headerMenu, profileData } from "../api/api";
import Resume from "../../components/resume"
const Index = () => {
  return (
    <Resume />
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

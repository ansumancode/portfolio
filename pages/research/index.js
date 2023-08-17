import { headerMenu, profileData, category } from "../api/api";
import Research from "../../components/research"

const Index = ({categoryMenu, researchData}) => {
  
  return (
    <Research categoryMenu={categoryMenu} researchData={researchData}  />
  )
}
export async function getServerSideProps() {
    const menu = await headerMenu();
    const profile = await profileData();
    const categoryMenu = await category();
    return {
      props: {
        menu,
        profile,
        categoryMenu,
      },
    };
  }

export default Index
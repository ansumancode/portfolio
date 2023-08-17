import { headerMenu, profileData, categoryResearch, category } from "../../api/api";
import Category from "../../../components/category";

const Index = ({researchData, categoryMenu}) => {

  return (
    <>
    <Category  researchData={researchData} categoryMenu={categoryMenu} />
    </>
  )
}



export async function getServerSideProps() {
    const menu = await headerMenu();
    const profile = await profileData();
    const researchData = await categoryResearch();
    const categoryMenu = await category();
    return {
      props: {
        menu,
        profile,
        researchData,
        categoryMenu
        
      },
    };
  }

export default Index
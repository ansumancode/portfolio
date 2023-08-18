import {
  headerMenu,
  profileData,
  categoryResearch,
  category,
} from "../../api/api";
import { LiaStepBackwardSolid } from "react-icons/lia";
import { useRouter } from "next/router";
import { client } from "../../../pages/api/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import PortableText from "react-portable-text";
import CommentsSection from "../../../components/commentFeature";
import Link from "next/link";

const Index = ({ researchData }) => {
  const router = useRouter();
  const changeUrl = router.query.innerPage;
  const builder = imageUrlBuilder(client);
  const tooltiptext = "Back";
  return (
    <div className="p-4 flex-1 ">
      <div className="p-4 border-2 border-gray-800 border-dashed rounded-lg dark:border-gray-700 md:relative">
        <div className="tooltip md:m-5 m-8">
          <Link href={`/research/${router.query.category}`}>
            <LiaStepBackwardSolid />
          </Link>
          <span className="tooltiptext">{tooltiptext}</span>
        </div>

        {researchData?.map((deatilCintent, i) => {
          return deatilCintent?.slug?.current == changeUrl ? (
            <div className="pdf-viewer" key={i}>
              <div className="flex flex-col items-center relative overflow-hidden md:w-4/5 h-[20.5rem] rounded-xl  w-full my-0 mx-auto sm:my-0 sm:mx-auto ">
                <Image
                  src={
                    deatilCintent?.image?.asset?._ref &&
                    builder.image(deatilCintent?.image?.asset?._ref).url()
                  }
                  width={800}
                  height={800}
                  className="object-cover absolute left-0 top-0 md:w-full h-full"
                  alt="Profile"
                />
              </div>
              <h2 className="mt-5">{deatilCintent?.title}</h2>
              <article className="mt-2">
                <PortableText
                  content={deatilCintent?.content}
                  serializers={{
                    normal: (props) => <p className="text-sm m-1" {...props} />,
                    myCodeField: (props) => (
                      <pre className="bg-gray-800 p-4 rounded-lg my-8">
                        <code className="text-white text-sm">{props.code}</code>
                      </pre>
                    ),
                  }}
                />
              </article>
              <hr className="my-10 border-1 border-gray-800 border-dashed" />
              <CommentsSection
                postId={deatilCintent?._id}
                postTitle={deatilCintent?.title}
                router={router}
              />
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};
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
      categoryMenu,
    },
  };
}

export default Index;

import {DiscussionEmbed} from "disqus-react"
const DisqusComments = ({ postId, postTitle, router }) => {
  const disqusShortname = "ansuman-portfolio"
  const disqusConfig = {
    url:  "http://localhost:3000",
    identifier: postId, // Single post id
    title: postTitle // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;
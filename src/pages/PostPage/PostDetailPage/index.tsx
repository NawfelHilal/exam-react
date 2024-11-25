import { useContext } from "react";
import { PostContext } from "../../../contexts/PostContextProvider";

const PostDetailPage = () => {
  const context = useContext(PostContext);

  if (!context?.post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{context.post.title}</h2>
      <p>{context.post.body}</p>
    </div>
  );
};

export default PostDetailPage;

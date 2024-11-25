import { useEffect, useContext } from "react";
import { useParams, Navigate, Link, Outlet } from "react-router-dom";
import { PostContext } from "../../contexts/PostContextProvider";
import { fetchPost } from "../../services/api/jsonplaceholder/posts";
import "./postPage.css"
import { isValidId } from "../../utils/valiators";

const PostPage = () => {
  const { postId } = useParams();
  const context = useContext(PostContext);

  useEffect(() => {
    const loadPost = async () => {
      if (!isValidId(postId)) {
        return <Navigate replace to="/not-found" />;
      }
  
      try {
        const post = await fetchPost(postId as string);
        context?.setPost(post);
      } catch (error) {
        console.error(error);
        return <Navigate replace to="/not-found" />;
      }
    };
  
    loadPost();
  }, [postId, context]);

  if (!context?.post) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <nav className="post">
        <ul className="ul-post">
          <li>
            <Link to="detail">Post Details</Link>
          </li>
          <li>
            <Link to={`owner/${context.post.userId}`}>Owner Details</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default PostPage;

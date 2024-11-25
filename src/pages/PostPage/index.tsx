import { useEffect, useContext } from "react";
import { useParams, Navigate, Link, Outlet } from "react-router-dom";
import { PostContext } from "../../contexts/PostContextProvider";
import { fetchPost } from "../../services/api/jsonplaceholder/posts";
import "./postPage.css"

const PostPage = () => {
  const { postId } = useParams();
  const context = useContext(PostContext);

  useEffect(() => {
    const loadPost = async () => {
      if (!postId || !Number.isInteger(Number(postId)) || Number(postId) <= 0) {
        return <Navigate replace to="/not-found" />;
      }

      try {
        const post = await fetchPost(postId);
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
            <Link to={`owner/${context.post.userId}`}>Post Author</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default PostPage;

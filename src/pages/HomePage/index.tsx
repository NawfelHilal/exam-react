import { useEffect, useState } from "react";
import { fetchPosts } from "../../services/api/jsonplaceholder/posts";
import Post from "../../models/Post";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadPosts();
  }, []);

  return (
    <ul>
      {posts.map((post: Post) => (
        <li key={post.id}>
          <a href={`/posts/${post.id}/detail`}>{post.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default HomePage;

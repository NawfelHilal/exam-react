export const rootUrl = "https://jsonplaceholder.typicode.com";
export const postsUrl = `${rootUrl}/posts`;

export const fetchPosts = async () => {
  const response = await fetch(postsUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  console.log(postsUrl);
  console.log(response);
  return response.json();
};

export const fetchPost = async (postId: string) => {
  const response = await fetch(`${postsUrl}/${postId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }
  console.log(response);
  return response.json();
};


import { createContext, ReactNode, useState } from "react";
import Post from "../models/Post";

type PostContextType = {
  post: Post | null;
  setPost: (post: Post | null) => void;
};

export const PostContext = createContext<PostContextType | undefined>(undefined);

const PostContextProvider = ({ children }: { children: ReactNode }) => {
  const [post, setPost] = useState<Post | null>(null);

  return (
    <PostContext.Provider value={{ post, setPost }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;

import { createContext, ReactNode, useContext, useState } from "react";

type AuthorContextType = {
  authorName: string;
  setAuthorName: (name: string) => void;
};

const AuthorContext = createContext<AuthorContextType | undefined>(undefined);

export const AuthorProvider = ({ children }: { children: ReactNode }) => {
  const [authorName, setAuthorName] = useState("John Doe");

  return (
    <AuthorContext.Provider value={{ authorName, setAuthorName }}>
      {children}
    </AuthorContext.Provider>
  );
};

export const useAuthor = () => {
  const context = useContext(AuthorContext);
  if (!context) {
    throw new Error("useAuthor must be used within an AuthorProvider");
  }
  return context;
};

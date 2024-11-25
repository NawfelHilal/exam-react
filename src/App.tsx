import "./reset.css";
import "./layout.css";
import Router from "./Router";
import PostContextProvider from "./contexts/PostContextProvider";
import { AuthorProvider } from "./contexts/AuthorContext";

function App() {
  return( 
    <AuthorProvider>
  <PostContextProvider>
  <Router />;
  </PostContextProvider>
  </AuthorProvider>
  );
}

export default App;
import { Link, Outlet } from "react-router-dom";
import "./pageTemplate.css";
import { useAuthor } from "../../contexts/AuthorContext";

const PageTemplate = () => {
  
  const { authorName } = useAuthor();
  const currentDate = new Date().toISOString();
  
  return(
  <>
    <header>
      <div className="navig">
      <h1 className="title">Exam Typescript React</h1>
      <nav>
        <Link to="">Home</Link>
      </nav>
      </div>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
        <p>
          <i>
            Par {authorName} le{" "}
            <time dateTime={currentDate}>
              {new Date(currentDate).toLocaleDateString()}
            </time>
          </i>
        </p>
      </footer>
  </>
)};

export default PageTemplate;

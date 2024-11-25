import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import PageTemplate from "../pages/PageTemplate";
import HomePage from "../pages/HomePage";
import PostPage from "../pages/PostPage";
import PostDetailPage from "../pages/PostPage/PostDetailPage";
import PostOwnerPage from "../pages/PostPage/PostOwnerPage";
import Page404 from "../pages/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageTemplate />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "posts/:postId",
        element: <PostPage />,
        children: [
          {
            path: "",
            element: <Navigate replace to="detail" />,
          },
          {
            path: "detail",
            element: <PostDetailPage />,
          },
          {
            path: "owner/:userId",
            element: <PostOwnerPage />,
          },
        ],
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);

const AppRouter = () => (
  <RouterProvider router={router} />
);

export default AppRouter;
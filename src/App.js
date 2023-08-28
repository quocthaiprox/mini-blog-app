import "./App.css";
import Home from "./component/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BlogDetails from "./component/BlogDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/blog/:id",
      element: <BlogDetails />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Book from "./pages/Book";
import CreateBook from "./pages/CreateBook";
import Authors from "./pages/Authors";
import Author from "./pages/Author";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/books",
          element: <Books />,
        },
        {
          path: "/books/:id",
          element: <Book />,
        },
        {
          path: "/books/create",
          element: <CreateBook />,
        },
        {
          path: "/authors/",
          element: <Authors />,
        },
        {
          path: "/authors/:id",
          element: <Author />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

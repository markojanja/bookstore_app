import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Book from "./pages/Book";
import CreateBook from "./pages/CreateBook";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

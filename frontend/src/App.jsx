import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root';
import Home from './pages/Home';
import Books from './pages/Books';
import Book from './pages/Book';
import CreateBook from './pages/CreateBook';
import Authors from './pages/Authors';
import Author from './pages/Author';
import CreateAuthor from './pages/CreateAuthor';
import Genres from './pages/Genres';
import CreateGenre from './pages/CreateGenre';
import Genre from './pages/Genre';
import UpdateGenre from './pages/UpdateGenre';
import UpdateBook from './pages/UpdateBook';
import UpdateAuthor from './pages/UpdateAuthor';
import CustomError from './components/CustomError';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <CustomError />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/books',
          element: <Books />,
        },
        {
          path: '/books/:id',
          element: <Book />,
        },
        {
          path: '/books/create',
          element: <CreateBook />,
        },
        {
          path: '/books/update/:id',
          element: <UpdateBook />,
        },
        {
          path: '/authors',
          element: <Authors />,
        },
        {
          path: '/authors/:id',
          element: <Author />,
        },
        {
          path: '/authors/create',
          element: <CreateAuthor />,
        },
        {
          path: '/authors/update/:id',
          element: <UpdateAuthor />,
        },
        {
          path: '/genres/',
          element: <Genres />,
        },
        {
          path: '/genres/:id',
          element: <Genre />,
        },
        {
          path: '/genres/create',
          element: <CreateGenre />,
        },
        {
          path: '/genres/update/:id',
          element: <UpdateGenre />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

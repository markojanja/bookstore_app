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
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedPage from './components/ProtectedPage';

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
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
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
          path: '/authors',
          element: <Authors />,
        },
        {
          path: '/authors/:id',
          element: <Author />,
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
          path: '/',
          element: <ProtectedPage />,
          children: [
            {
              path: '/books/create',
              element: <CreateBook />,
            },
            {
              path: '/books/update/:id',
              element: <UpdateBook />,
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
              path: '/genres/create',
              element: <CreateGenre />,
            },
            {
              path: '/genres/update/:id',
              element: <UpdateGenre />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

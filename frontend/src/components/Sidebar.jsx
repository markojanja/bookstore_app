import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Sidebar = () => {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  if (loading) return <div></div>;

  return (
    <div className="hidden md:flex flex-col gap-5 items-center justify-start pt-4 border-r border-r-emerald-500">
      <ul className="flex flex-col gap-2 items-start w-4/6 mx-auto">
        <li className="font-semibold">
          <Link to={'/'} aria-label="Home">
            Home
          </Link>
        </li>
        <li className="font-semibold">
          <Link to={'/books'} aria-label="Books">
            Books
          </Link>
        </li>
        <li className="font-semibold">
          <Link to={'/authors'} aria-label="Authors">
            Authors
          </Link>
        </li>
        <li className="font-semibold">
          <Link to={'/genres'} aria-label="Genres">
            Genres
          </Link>
        </li>
      </ul>
      <div className="w-4/6 bg-gray-200 h-[2px]"></div>

      <ul className="flex flex-col gap-2 items-start w-4/6 mx-auto">
        {user ? (
          <>
            <li className="font-semibold">
              <Link to={'/books/create'} aria-label="Add Books">
                Add Books
              </Link>
            </li>
            <li className="font-semibold">
              <Link to={'/authors/create'} aria-label="Add Authors">
                Add Authors
              </Link>
            </li>
            <li className="font-semibold">
              <Link to={'/genres/create'} aria-label="Add Genre">
                Add Genre
              </Link>
            </li>
            <li className="font-semibold cursor-pointer" onClick={handleLogout} aria-label="Logout">
              Logout
            </li>
          </>
        ) : (
          <>
            <li className="font-semibold">
              <Link to={'/login'} aria-label="Login">
                Login
              </Link>
            </li>
            <li className="font-semibold">
              <Link to={'/register'} aria-label="Register">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;

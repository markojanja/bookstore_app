import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const { user } = useAuth();
  return (
    <nav className="flex items-center justify-between p-3 shadow">
      <Link className="font-bold text-lg text-emerald-500" to={'/'}>
        BookStoreApp
      </Link>
      {user && <p className="font-semibold">Hi, {user}</p>}
    </nav>
  );
};

export default Navbar;

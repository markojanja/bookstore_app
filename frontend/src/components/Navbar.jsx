import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-start p-3 shadow">
      <Link className="font-bold text-lg text-emerald-500" to={'/'}>
        BookStoreApp
      </Link>
    </nav>
  );
};

export default Navbar;

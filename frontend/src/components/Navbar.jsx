import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-start ml-2 p-3">
      <Link className="font-bold text-lg" to={"/"}>
        BookStoreApp
      </Link>
    </nav>
  );
};

export default Navbar;

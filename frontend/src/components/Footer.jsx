import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center p-3">
      <Link
        className="font-bold text-lg"
        to="https://github.com/markojanja/bookstore_app"
        target="_blank"
      >
        markoJanja
      </Link>
    </footer>
  );
};

export default Footer;

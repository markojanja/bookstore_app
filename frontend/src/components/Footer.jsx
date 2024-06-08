import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center p-3">
      <Link to="https://github.com/markojanja/bookstore_app" target="_blank">
        markoJanja
      </Link>
    </footer>
  );
};

export default Footer;

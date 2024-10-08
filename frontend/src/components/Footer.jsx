import { Link } from 'react-router-dom';
import { IoLogoGithub } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="flex items-center justify-center p-3  bg-gray-950/95 text-white">
      <Link className="font-bold text-lg text-center" to="https://github.com/markojanja/bookstore_app" target="_blank">
        Marko Janjic <IoLogoGithub className="text-2xl inline-flex" />
      </Link>
    </footer>
  );
};

export default Footer;

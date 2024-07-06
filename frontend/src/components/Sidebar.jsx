import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col gap-5 items-center justify-start pt-4 border-r border-r-emerald-500">
      <ul className="flex flex-col gap-2 items-start w-4/6 mx-auto">
        <li className="font-semibold">
          <Link to={'/books'}>Books</Link>
        </li>
        <li className="font-semibold">
          <Link to={'/authors'}>Authors</Link>
        </li>
        <li className="font-semibold">
          <Link to={'/genres'}>Genres</Link>
        </li>
      </ul>
      <div className="w-4/6 bg-gray-200 h-[2px]"></div>
      <ul className="flex flex-col gap-2 items-start w-4/6 mx-auto">
        <li className="font-semibold">
          <Link to={'/books/create'}>Add Books</Link>
        </li>
        <li className="font-semibold">
          <Link to={'/authors/create'}>Add Authors</Link>
        </li>
        <li className="font-semibold">
          <Link to={'/genres/create'}>Add Genre</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

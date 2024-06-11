import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-5 items-start justify-start mt-4 border-r border-r-lime-500">
      <ul>
        <li>
          <Link to={"/books"}>Books</Link>
        </li>
        <li>
          <Link to={"/authors"}>Authors</Link>
        </li>
        <li>
          <Link to={"/genres"}>Genres</Link>
        </li>
      </ul>
      <hr></hr>
      <ul>
        <li>
          <Link to={"/books/create"}>Add Books</Link>
        </li>
        <li>
          <Link to={"/authors/create"}>Add Authors</Link>
        </li>
        <li>
          <Link to={"/genres/create"}>Add Genre</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

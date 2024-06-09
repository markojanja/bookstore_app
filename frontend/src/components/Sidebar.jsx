import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fflex flex-col gap-5 items-stretch border-r border-r-lime-500">
      <ul>
        <li>
          <Link to={"/books"}>Books</Link>
        </li>
        <li>
          <Link to={"/authors"}>Authors</Link>
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
      </ul>
    </div>
  );
};

export default Sidebar;

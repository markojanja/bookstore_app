import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="items-stretch border-r border-r-lime-500">
      <ul>
        <li>
          <Link to={"/books"}>Books</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

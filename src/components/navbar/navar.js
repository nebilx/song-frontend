import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Songs</Link>
          </li>
          <li>
            <Link to="/add">Add Song</Link>
          </li>
          <li>
            <Link to="/statics">Statics</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div id="navigation">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Characters">Characters</Link>
          </li>
          <li>
            <Link to="/Locations">Locations</Link>
          </li>
          <li>
            <Link to="/Episodes">Episodes</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;

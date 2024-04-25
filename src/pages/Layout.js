import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div id="navigation">
        <nav> 
          <Link to="/"><div class="button">Home</div></Link>
          <Link to="/Characters"><div class="button">Characters</div></Link>
          <Link to="/Locations"><div class="button">Locations</div></Link>
          <Link to="/Episodes"><div class="button">Episodes</div></Link>
        </nav>
      </div>

      <div id="main">
        <Outlet />
      </div>
    </>
  )
};

export default Layout;

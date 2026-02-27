import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Courses</Link>
      <Link to="/planner">Planner</Link>
      <Link to="/summary">Summary</Link>
    </nav>
  );
}

export default Navbar;
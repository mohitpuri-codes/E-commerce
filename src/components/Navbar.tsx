import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul className="flex gap-3 items-center p-2 bg-black text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

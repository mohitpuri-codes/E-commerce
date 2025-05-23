import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  function handleLogout() {
    navigate("/login");
    localStorage.removeItem("token");
  }
  return (
    <>
      <nav className="flex gap-3 items-center p-2 bg-black text-white justify-between mr-1">
        <ul className="flex gap-3 items-center p-2 bg-black text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div>
          <input
            type="text"
            placeholder="Search for Products"
            className="border-1 border-white max-w-4xl w-full"
          />
        </div>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </>
  );
}

export default Navbar;

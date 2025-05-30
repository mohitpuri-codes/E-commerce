import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { type ChangeEvent } from "react";
import { debounce } from "../utils/debounce";

function Navbar() {
  const [_, setSearchedUser] = useSearchParams();

  const navigate = useNavigate();
  function handleLogout() {
    navigate("/login");
    localStorage.removeItem("token");
  }

  const debouncedSearch = debounce(function handleChange(
    e: ChangeEvent<HTMLInputElement>
  ) {
    setSearchedUser({ search: e.target.value });
  },
  1000);

  return (
    <>
      <nav className="flex gap-3 items-center p-2 bg-black text-white justify-between mr-1 sticky top-0 z-50">
        <ul className="flex gap-3 items-center p-2 bg-black text-white">
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div>
          <input
            type="text"
            placeholder="Search for Products"
            onChange={debouncedSearch}
            className="border-1 border-white max-w-4xl w-full"
          />
        </div>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </>
  );
}

export default Navbar;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center">
    <h1 className="text-xl font-bold text-yellow-400">PokeAPI</h1>
    <button className="bg-yellow-400 px-4 py-2 rounded">
      <Link to="/" className="text-black">Login</Link>
    </button>
  </div>
  );
};

export default Navbar;

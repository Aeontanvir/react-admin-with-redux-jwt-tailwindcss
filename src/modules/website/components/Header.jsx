import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="bg-blue-500 py-6">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl">Project Costing App</h1>
        <ul className="flex space-x-4 text-white">
          <li>
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/auth" className="hover:text-gray-200">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

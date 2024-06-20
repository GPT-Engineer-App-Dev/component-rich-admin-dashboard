import { Link } from "react-router-dom";
import { FaHome, FaUser, FaChartBar, FaCog } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white flex items-center space-x-2">
            <FaHome />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/user-management" className="text-white flex items-center space-x-2">
            <FaUser />
            <span>User Management</span>
          </Link>
        </li>
        <li>
          <Link to="/analytics" className="text-white flex items-center space-x-2">
            <FaChartBar />
            <span>Analytics</span>
          </Link>
        </li>
        <li>
          <Link to="/settings" className="text-white flex items-center space-x-2">
            <FaCog />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
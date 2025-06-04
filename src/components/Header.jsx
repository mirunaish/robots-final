import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ children }) => {
  return (
    <div className="header">
      <Link className="pointy title" to="/">
        The Human Machine
      </Link>
      <div className="header-buttons">{children}</div>
    </div>
  );
};

export default Header;

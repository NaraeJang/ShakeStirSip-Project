import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useRef, useState } from "react";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    console.log(linksContainerRef.current.getBoundingClientRect());
    console.log(linksRef.current.getBoundingClientRect());
    setShowLinks(!showLinks);
  };

  const linksStyle = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <span className="logo">ShakeStirSip</span>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div
          className="links-container"
          ref={linksContainerRef}
          style={linksStyle}>
          <div className="nav-links" ref={linksRef}>
            <NavLink to="/" className="nav-link">
              home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              about
            </NavLink>
            <NavLink to="newsletter" className="nav-link">
              newsletter
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

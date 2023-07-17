import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/pathologies">Pathologies</Link>
        <Link to="/neuroskills">Neuroskills</Link>
        <Link to="/blog">Blog</Link>
      </ul>
    </nav>
  );
};

export default Navbar;

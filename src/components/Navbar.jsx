import React from "react";
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdFormatAlignLeft } from "react-icons/md";
import { RxTable } from "react-icons/rx";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar center">
      <Link to="/" className="links">
        <div className="nav center">
          <span>
            <AiOutlineHome />
          </span>
          <span>Home</span>
        </div>
      </Link>
      <Link to="/form" className="links">
        <div className="nav center">
          <span>
            <MdFormatAlignLeft />
          </span>
          <span>Form</span>
        </div>
      </Link>
      <Link to="/table" className="links">
        <div className="nav center">
          <span>
            <RxTable />
          </span>
          <span>Table</span>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;

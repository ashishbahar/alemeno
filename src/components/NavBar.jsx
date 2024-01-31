import React, { useState } from "react";
import logo from "../assets/images/png/logo.png";
import searchicon from "../assets/images/svg/search.svg";
const NavBar = () => {
  const [nav, setNav] = useState(true);
  if (nav) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <div className=" bg-black">
      <div className="container">
        <div className=" d-flex py-4 justify-content-between align-items-center ">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div
            className={
              nav === true
                ? " d-flex align-items-center flex-column flex-lg-row mobile_ul hide "
                : " d-flex align-items-center flex-column flex-lg-row mobile_ul show "
            }
          >
            <p className="mb-0 c_pointer me-5 text-white link_line">
              Enrolled Course{" "}
            </p>
            <div className="nav_input d-flex align-items-center">
              <input
                className="input"
                placeholder="Search Course"
                type="text"
              />
              <img width={20} height={30} src={searchicon} alt="searchicon" />
            </div>
          </div>
          <div className="text-end d-lg-none">
            <button
              className={nav === true ? "hamburger" : "hamburger-2"}
              onClick={() => setNav(!nav)}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import logo from "../assets/images/png/logo.png";
import searchicon from "../assets/images/svg/search.svg";
const NavBar = () => {
  return (
    <div className=" bg-black">
      <div className="container">
        <div className=" d-flex py-4 justify-content-between align-items-center ">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className=" d-flex align-items-center">
            <p className="mb-0 c_pointer me-5 text-white link_line">Enrolled Course </p>
            <div className="nav_input d-flex align-items-center">
              <input
                className="input"
                placeholder="Search Course"
                type="text"
              />
              <img width={20} height={30} src={searchicon} alt="searchicon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import img1 from "../assets/images/png/img1.png";
import img2 from "../assets/images/png/img2.png";
import img3 from "../assets/images/png/img3.png";
const Courses = () => {
  return (
    <div className="bg-black">
      <div className="container py-5">
        <h2 className="text-white fs-1 fw-semibold">
          Latest <span className="linear_gradient">Courses</span>
        </h2>
        <div className="row pt-5">
          <div className="col-lg-4">
            <div className="course_box">
              <img src={img1} alt="img1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

import React from "react";
import img1 from "../assets/images/png/img1.png";
import img2 from "../assets/images/png/img2.png";
import img3 from "../assets/images/png/img3.png";
import { CourseData } from "./Helper";
const Courses = () => {
  return (
    <div className="bg-black pt-5">
      <div className="container py-5 mt-5">
        <h2 className="text-white fs-1 fw-semibold">
          Latest <span className="linear_gradient">Courses</span>
        </h2>
        <div className="row pt-5">
          {CourseData &&
            CourseData.map((obj, i) => {
              return (
                <div key={i} className="col-lg-4 mt-4">
                  <div className="course_box p-3">
                    <img className=" w-100 py-3" src={obj.img} alt="img1" />
                    <h2 className=" text-white fs-3">{obj.h1}</h2>
                    <p className=" text-white">{obj.p}</p>
                    <button className=" button w-100 border-1 py-2">
                      Enrolled
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Courses;

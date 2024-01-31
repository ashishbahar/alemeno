import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  // Retrieve the enrolledCourses array from the Redux store
  const enrolledCourses = useSelector(
    (state) => state.studentDashboardData.enrolledCourses
  );

  return (
    <section className=" pt-5">
      <div className=" container pt-5 ">
        {/* Display the enrolled courses in the Student Dashboard */}
        {enrolledCourses.map((course, index) => (
          <div className="py-5" key={index}>
            <div className="text-white fw-semibold fs-5">
              
              <img src={course.image} alt="" />
            </div>
            <p className="text-white fw-semibold mt-3 fs-5">
              <span className=" fw-bold fs-3">Name:</span> {course.name}
            </p>
            <p className="text-white fw-semibold fs-5">
              <span className=" fw-bold fs-3">Instructor:</span>{" "}
              {course.instructor}
            </p>

            <p className="text-white fw-semibold fs-5">
              <span className=" fw-bold fs-3">Duration:</span> {course.duration}
            </p>
          </div>
        ))}
        <div className="text-center">
          <Link to="/">
            <button className=" button py-2 px-5 "> Go To Home</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StudentDashboard;

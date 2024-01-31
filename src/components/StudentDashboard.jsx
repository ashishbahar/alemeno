import React from "react";
import { useSelector } from "react-redux";

const StudentDashboard = () => {
  // Retrieve the enrolledCourses array from the Redux store
  const enrolledCourses = useSelector(
    (state) => state.studentDashboardData.enrolledCourses
  );

  return (
    <section>
      <div>
        {/* Display the enrolled courses in the Student Dashboard */}
        {enrolledCourses.map((course, index) => (
          <div key={index}>
            <p className="text-white">Name: {course.name}</p>
            <p className="text-white">Instructor: {course.instructor}</p>
            <p className="text-white">Image: {course.image}</p>
            <p className="text-white">Duration: {course.duration}</p>
            {/* Add other course details as needed */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudentDashboard;

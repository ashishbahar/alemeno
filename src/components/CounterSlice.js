// CounterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrolledCourses: [], // Initialize the enrolledCourses array
};

export const studentDashboardData = createSlice({
  name: "StudentDashboardData",
  initialState, // Use the initialState defined above
  reducers: {
    enrollStudent: (state, action) => {
      state.enrolledCourses.push(action.payload);
    },
    // Add other reducers as needed
  },
});

// Export the reducer and actions
export const { enrollStudent } = studentDashboardData.actions;
export default studentDashboardData.reducer;

// store.js

import { configureStore } from "@reduxjs/toolkit";
import studentDashboardData from "./CounterSlice";

export default configureStore({
  reducer: {
    studentDashboardData, // Check if this key matches the one used in your useSelector
  },
});

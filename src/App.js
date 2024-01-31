import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ReactNativeCourse from "./components/ReactNativeCourse";
import Home from "./pages/Home";
import StudentDashboard from "./components/StudentDashboard";
import ReactNativeDev from "./components/ReactNativeDev";
import ReactjsCourse from "./components/ReactjsCourse";
import ReactNativeUi from "./components/ReactNativeUi";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/ReactNativeCourse"
          element={<ReactNativeCourse />}
        ></Route>
        <Route path="/ReactjsCourse" element={<ReactjsCourse />}></Route>
        <Route path="/ReactNativeDev" element={<ReactNativeDev />}></Route>
        <Route path="/ReactNativeUi" element={<ReactNativeUi />}></Route>

        <Route path="/" element={<Home />}></Route>
        <Route path="/EnrolledCourses" element={<StudentDashboard />} />
      </Routes>
    </>
  );
}

export default App;

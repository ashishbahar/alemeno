import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ReactNativeCourse from "./components/ReactNativeCourse";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/ReactNativeCourse"
          element={<ReactNativeCourse />}
        ></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;

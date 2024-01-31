import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ReactNativeCourse from "./components/ReactNativeCourse";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ReactNativeCourse />}></Route>
      </Routes>
    </>
  );
}

export default App;

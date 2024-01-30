import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Courses from "./components/Courses";

function App() {
  return (
    <>
      <NavBar />
      <Courses />
    </>
  );
}

export default App;

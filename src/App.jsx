import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Courses from "./pages/Courses";
import Planner from "./pages/Planner";
import Summary from "./pages/Summary";
import { useState } from "react";

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Courses setSelectedCourses={setSelectedCourses} />}
        />
        <Route
          path="/planner"
          element={<Planner selectedCourses={selectedCourses} />}
        />
        <Route
          path="/summary"
          element={<Summary selectedCourses={selectedCourses} />}
        />
      </Routes>
    </>
  );
}

export default App;
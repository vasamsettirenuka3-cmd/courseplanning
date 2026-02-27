import { useEffect, useState } from "react";
import CourseCards from "../components/CourseCards";
import coursesData from "../data/courses";

function Courses({ setSelectedCourses }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesData);
      setLoading(false);
    }, 1500);
  }, []);

  const addCourse = (course) => {
    setSelectedCourses((prev) => [...prev, course]);
  };

  if (loading) return <h2 className="container">Loading courses...</h2>;

  return (
    <div className="container">
      <h2>Available Courses</h2>
      {courses.map((course) => (
        <CourseCards
          key={course.id}
          course={course}
          addCourse={addCourse}
        />
      ))}
    </div>
  );
}

export default Courses;
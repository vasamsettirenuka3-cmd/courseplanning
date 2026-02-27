import React, { useState } from "react";

function CourseCards({ course, addCourse, removeCourse }) {

  const [added, setAdded] = useState(false);

  const handleClick = () => {
    if (!added) {
      addCourse(course);
      setAdded(true);
    } else {
      removeCourse(course);
      setAdded(false);
    }
  };

  return (
    <div className="card">
      <h3>
        {course.code} - {course.name}
      </h3>

      <p>Credits: {course.credits}</p>

      <button
        onClick={handleClick}
        style={{
          backgroundColor: added ? "red" : "#4e73df",
          color: "white",
          cursor: "pointer"
        }}
      >
        {added ? "Remove ❌" : "Add"}
      </button>
    </div>
  );
}

export default CourseCards;
import { useMemo } from "react";

function Planner({ selectedCourses }) {
  const totalCredits = useMemo(() => {
    return selectedCourses.reduce((sum, c) => sum + c.credits, 0);
  }, [selectedCourses]);

  return (
    <div className="container">
      <h2>Planner</h2>

      {selectedCourses.length === 0 && <p>No courses selected.</p>}

      {selectedCourses.map((c, index) => (
        <p key={index}>
          {c.code} - {c.name}
        </p>
      ))}

      <h3>Total Credits: {totalCredits}</h3>

      {totalCredits > 24 && (
        <p className="error">Credit limit exceeded!</p>
      )}
    </div>
  );
}

export default Planner;
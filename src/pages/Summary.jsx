function Summary({ selectedCourses }) {
  return (
    <div className="container">
      <h2>Summary</h2>
      <p>Total Courses Selected: {selectedCourses.length}</p>
    </div>
  );
}

export default Summary;
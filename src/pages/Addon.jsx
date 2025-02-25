import React from 'react';
import "../Styles/CourseTable.css";

const addOnCourses = [
  { id: 1, name: "Fashion Designing Technology" },
  { id: 2, name: "Cookery Management" },
  { id: 3, name: "Beauty Parlour" },
  { id: 4, name: "Speak Well English" },
  { id: 5, name: "Basic in Photography" },
  { id: 6, name: "Repairing of Electronic and Electrical Appliances" },
  { id: 7, name: "Panchayat Raj Administration" },
  { id: 8, name: "Banking" },
  { id: 9, name: "Sanskrit Bridge Course" },
  { id: 10, name: "Sanskrit Communications" },
  { id: 11, name: "Understanding Revenue Records" },
  { id: 12, name: "Milk Analysis" },
  { id: 13, name: "Computer Formatting, Installation and Networking" },
  { id: 14, name: "Gardening" },
  { id: 15, name: "MATLAB/ SCiLAB" },
  { id: 16, name: "R-Software" },
  { id: 17, name: "Fish Farming" },
  { id: 18, name: "Vermicomposting" },
  { id: 19, name: "Preparatory Program for Competitive Exams" },
  { id: 20, name: "Computer Operating Skills Development" },
  { id: 21, name: "Share Trading Operations" },
  { id: 22, name: "Advertisement Writing" },
  { id: 23, name: "Counselling" },
  { id: 24, name: "Military and Police Pre-recruitment Training" },
  { id: 25, name: "Identification and Conservation of Medical Plants" },
  { id: 26, name: "Office Administration and Management" },
];

const AddOnCourses = () => {
  // Split courses into two columns
  const half = Math.ceil(addOnCourses.length / 2);
  const firstHalf = addOnCourses.slice(0, half);
  const secondHalf = addOnCourses.slice(half);

  return (
    <div className="addon-container">
      <h2 className="addon-title">Add On / Self-Financing Courses</h2>
      <table className="addon-table">
        <thead>
          <tr>
            <th>SR.NO</th>
            <th>COURSES</th>
            <th>SR.NO</th>
            <th>COURSES</th>
          </tr>
        </thead>
        <tbody>
          {firstHalf.map((course, index) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{secondHalf[index] ? secondHalf[index].id : ""}</td>
              <td>{secondHalf[index] ? secondHalf[index].name : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddOnCourses;
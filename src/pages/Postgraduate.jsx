import React from "react";
import "../Styles/CourseTable.css";

const PostGraduate = () => {
  // Data for Postgraduate Courses
  const pgCourses = [
    { id: 1, name: "M.Sc. Chemistry", level: "PG", duration: "2 Years", qualification: "B.Sc. Chemistry", medium: "English", strength: "30" },
    { id: 2, name: "M.A. Marathi", level: "PG", duration: "2 Years", qualification: "B.A. Marathi", medium: "Marathi", strength: "25" },
    { id: 3, name: "M.A. Economics",level:"Part-2", duration: "2 Years", qualification: "Economics Graduate", medium: "Marathi", strength: 50 },
  { id: 4, name: "M.A. Political Science", level: "Part-1", duration: "2 Years", qualification: "Political Science Graduate", medium: "Marathi", strength: 50 },
  { id: 5, name: "M.A. Political Science", level: "Part-2", duration: "2 Years", qualification: "Political Science Graduate", medium: "Marathi", strength: 50 },
  { id: 6, name: "M.A. Sociology", level: "Part-1", duration: "2 Years", qualification: "B.Sc Graduate", medium: "Marathi", strength: 50 },
  { id: 7, name: "M.A. Sociology", level:"Part-2", duration: "2 Years", qualification: "B.Sc Graduate", medium: "Marathi", strength: 50 },
  { id: 8, name: "M.A. Psychology", level: "Part-1", duration: "2 Years", qualification: "B.Sc Graduate", medium: "Marathi", strength: 20 },
  { id: 9, name: "M.A. Psychology", level: "Part-2", duration: "2 Years", qualification: "B.Sc Graduate", medium: "Marathi", strength: 20 },
  { id: 10, name: "M.Sc. Chemistry (Organic)", level: "Part-1", duration: "2 Years", qualification: "B.Sc Graduate", medium: "English", strength: 88 },
  { id: 11, name: "M.Sc. Chemistry (Organic)",level: "Part-2", duration: "2 Years", qualification: "B.Sc Graduate", medium: "English", strength: 80 },
  { id: 12, name: "M.Sc. Analytical Chemistry", level:"Part-1", duration: "2 Years", qualification: "B.Sc Graduate", medium: "English", strength: 66 },
  { id: 13, name: "M.Sc. Analytical Chemistry", level: "Part-2", duration: "2 Years", qualification: "B.Sc Graduate", medium: "English", strength: 60 },
  { id: 14, name: "M.Sc. Physics", level:"Part-1", duration: "2 Years", qualification: "B.Sc Graduate", medium: "English", strength: "20+2=22" },
  { id: 15, name: "M.Sc. Physics", level:"Part-2", duration: "2 Years", qualification: "B.Sc Graduate", medium: "English", strength: "20+2=22" },
  { id: 16, name: "M.Sc. Industrial Microbiology", level:"Part-1", duration: "2 Years", qualification: "B.Sc Graduate", medium: "English", strength: 44 },
  { id: 17, name: "M.Sc. Industrial Microbiology", level:"Part-2", duration: "2 Years", qualification: "B.Sc Graduate", medium: "English", strength: 40 },
  { id: 18, name: "M.Sc. Zoology", level:"Part-1", duration: "2 Years", qualification: "B.Sc Graduate", medium: "English", strength: "20+2=22" },
  { id: 19, name: "M.Sc. Zoology", level:"Part-2", duration: "2 Years", qualification: "B.Sc Graduate", medium: "English", strength: "20+2=22" },
  { id: 20, name: "M.Sc. Computer Science", level:"Part-1", duration: "2 Years", qualification: "B.Sc Graduate", medium: "English", strength: 60 },
  { id: 21, name: "M.Sc. Computer Science", level:"Part-2", duration: "2 Years", qualification: "B.Sc Graduate", medium: "English", strength: 60 },
  { id: 22, name: "M.Sc. Mathematics", level:"Part-1", duration: "2 Years", qualification: "B.Sc Graduate", medium: "English", strength: 50 },
  { id: 23, name: "M.Sc. Mathematics", level:"Part-2", duration: "2 Years", qualification: "B.Sc Graduate", medium: "English", strength: 50 },
  { id: 24, name: "M.Sc. Statistics",  level:"Part-1", duration: "2 Years", qualification: "B.Sc Statistics", medium: "Statistics", strength: 44 },
  { id: 25, name: "M.Sc. Statistics", level:"Part-2", duration: "2 Years", qualification: "B.Sc Statistics", medium: "Statistics", strength: 40 },
  { id: 26, name: "M.Com.",  level:"Part-1", duration: "2 Years", qualification: "Geography Graduate", medium: "Marathi", strength: 100 },
  { id: 27, name: "M.Com.", level:"Part-2", duration: "2 Years", qualification: "Geography Graduate", medium: "Marathi", strength: 100 },
  { id: 28, name: "M.A. Geography", level:"Part-1", duration: "2 Years", qualification: "Geography Graduate", medium: "Marathi", strength: 22 },
  { id: 29, name: "M.A. Geography",  level:"Part-2", duration: "2 Years", qualification: "Geography Graduate", medium: "Marathi", strength: 20 },
  { id: 30, name: "M.Com. (IT)",  level:"Part-1", duration: "2 Years", qualification: "B.Com. (IT)", medium: "English", strength: 50 },
  { id: 31, name: "M.Com. (IT)", level:"Part-2", duration: "2 Years", qualification: "B.Com. (IT)", medium: "English", strength: 50 },
];


  // Data for M.Phil. Courses
  const mphilCourses = [
    { id: 1, name: "Marathi", level: "------", duration: "2 Years", qualification: "Graduate", medium: "Marathi", strength: "15" },
    { id: 2, name: "Botany", level: "------", duration: "2 Years", qualification: "Graduate", medium: "Marathi", strength: "---" },
    { id: 3, name: "Chemistry", level: "------", duration: "2 Years", qualification: "Graduate", medium: "Marathi", strength: "---" }
  ];

  // Data for Ph.D. Programmes
  const phdPrograms = ["Chemistry", "Zoology", "Botany"];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Postgraduate Courses Table */}
      <div className="mb-8 bg-green-100 p-4 rounded-lg shadow-md">
        <h2 className="text-center text-lg font-bold bg-gray-700 text-white p-2 rounded-t-lg">- Postgraduate Courses -</h2>
        <table className="w-full border border-gray-300">
          <thead className="bg-purple-300">
            <tr>
              <th className="border p-2">Sr.No</th>
              <th className="border p-2">Name of The Programme</th>
              <th className="border p-2">Programme/Level</th>
              <th className="border p-2">Duration</th>
              <th className="border p-2">Entry Qualification Level</th>
              <th className="border p-2">Medium of Instruction</th>
              <th className="border p-2">Sanctioned Student Strength</th>
            </tr>
          </thead>
          <tbody>
            {pgCourses.map((course) => (
              <tr key={course.id} className="text-center bg-white">
                <td className="border p-2">{course.id}</td>
                <td className="border p-2">{course.name}</td>
                <td className="border p-2">{course.level}</td>
                <td className="border p-2">{course.duration}</td>
                <td className="border p-2">{course.qualification}</td>
                <td className="border p-2">{course.medium}</td>
                <td className="border p-2">{course.strength}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* M.Phil. Courses Table */}
      <div className="mb-8 bg-green-100 p-4 rounded-lg shadow-md">
        <h2 className="text-center text-lg font-bold bg-gray-700 text-white p-2 rounded-t-lg">- M. Phil. Courses -</h2>
        <table className="w-full border border-gray-300">
          <thead className="bg-purple-300">
            <tr>
              <th className="border p-2">Sr.No</th>
              <th className="border p-2">Name of The Programme</th>
              <th className="border p-2">Programme/Level</th>
              <th className="border p-2">Duration</th>
              <th className="border p-2">Entry Qualification Level</th>
              <th className="border p-2">Medium of Instruction</th>
              <th className="border p-2">Sanctioned Student Strength</th>
            </tr>
          </thead>
          <tbody>
            {mphilCourses.map((course) => (
              <tr key={course.id} className="text-center bg-white">
                <td className="border p-2">{course.id}</td>
                <td className="border p-2">{course.name}</td>
                <td className="border p-2">{course.level}</td>
                <td className="border p-2">{course.duration}</td>
                <td className="border p-2">{course.qualification}</td>
                <td className="border p-2">{course.medium}</td>
                <td className="border p-2">{course.strength}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Ph.D. Programmes Table */}
      <div className="bg-green-100 p-4 rounded-lg shadow-md">
        <h2 className="text-center text-lg font-bold bg-gray-700 text-white p-2 rounded-t-lg">- Ph. D. Programmes -</h2>
        <table className="w-full border border-gray-300 text-center">
          <tbody>
            <tr>
              {phdPrograms.map((subject, index) => (
                <td key={index} className="border p-3 bg-white font-semibold">{subject}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostGraduate;
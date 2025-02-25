import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../Styles/CourseTable.css"; // Ensure you have a CSS file for styling.

const courses = [
    { id: 1, name: "B.A.", duration: "3 Years", entryQualification: "H.S.C.", medium: "Marathi", strength: [480, 360, 360] },
    { id: 2, name: "B.Com.", duration: "3 Years", entryQualification: "H.S.C.", medium: "Marathi / English", strength: [480, 480, 480] },
    { id: 3, name: "B.Sc.", duration: "3 Years", entryQualification: "H.S.C.", medium: "English", strength: [1080, 960, 840] },
    { id: 4, name: "B.C.S.", duration: "3 Years", entryQualification: "H.S.C.", medium: "English", strength: [272, 272, 112] },
    { id: 5, name: "B. C. A.", duration: "3 Years", entryQualification: "H.S.C.", medium: "English", strength: [272, 272, 112] },
    { id: 6, name: "B. Sc.(Biotechnology) ", duration: "3 Years", entryQualification: "H.S.C.", medium: "English", strength: [272, 272, 112] },
    { id: 7, name: "B. Com. (IT)", duration: "3 Years", entryQualification: "H.S.C.", medium: "English", strength: [272, 272, 112] },
    { id: 8, name: "B.Voc.( Hotel Management & Catring Technology )", duration: "3 Years", entryQualification: "H.S.C.", medium: "English", strength: [272, 272, 112] },
    { id: 9, name: "B. VOC. Agriculture", duration: "3 Years", entryQualification: "H.S.C.", medium: "English", strength: [272, 272, 112] },
    { id: 10, name:"B.Com. Bank Management(Entire)", duration: "3 Years", entryQualification: "H.S.C.", medium: "English", strength: [272, 272, 112] },
];

const Graduate = () => {
    return (
        <div className="container">
            <div className="header">Under Graduate Courses</div>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Name of The Programme</th>
                        <th>Programme/Level</th>
                        <th>Duration</th>
                        <th>Entry Qualification</th>
                        <th>Medium of Instruction</th>
                        <th>Sanctioned Strength</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course, index) => (
                        <>
                            {course.strength.map((strength, partIndex) => (
                                <tr key={`${course.id}-${partIndex}`}>
                                    {partIndex === 0 && (
                                        <>
                                            <td rowSpan={course.strength.length}>{index + 1}</td>
                                            
                                            {/* Link to Graduate Page */}
                                            <td rowSpan={course.strength.length}>
                                                <Link to={`/graduate/${course.id}`} className="course-link">
                                                    {course.name}
                                                </Link>
                                            </td>

                                            <td>Part - {partIndex + 1}</td>
                                            <td rowSpan={course.strength.length}>{course.duration}</td>
                                            <td rowSpan={course.strength.length}>{course.entryQualification}</td>
                                            <td rowSpan={course.strength.length}>{course.medium}</td>
                                            <td>{strength !== null ? strength : "-"}</td>
                                        </>
                                    )}
                                    {partIndex !== 0 && (
                                        <>
                                            <td>Part - {partIndex + 1}</td>
                                            <td>{strength !== null ? strength : "-"}</td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Graduate;
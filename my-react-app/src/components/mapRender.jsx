import React from "react";

const teachers = [
    {subject: "DBMS", teacher: "Dr. Monika"},
    {subject: "Java", teacher: "Dr. Suman"},
    {subject: "CNS", teacher: "Ms. Rohini"},
    {subject: "PSLP", teacher: "Ms. Yogita"},
];

function TeacherList() {
    return(
        <>
        <h1 style={ {color: "orange"}}>CSE-DS Teachers (SEM4)</h1>
        <h2>Rendering list using map method</h2>
        
        {teachers.map((teacher,index) => (
            <li key={index}>
                <strong>{ teacher.subject }</strong> - Teacher: { teacher.teacher }
                {teacher.subject === "DBMS" && <span>⭐</span>}
            </li>
        ))}
        
        </>
    )
}
export default TeacherList;
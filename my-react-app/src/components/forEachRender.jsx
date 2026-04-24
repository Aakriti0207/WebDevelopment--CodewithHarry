import React from "react";

const teachers = [
    {subject: "DBMS", teacher: "Dr. Monika"},
    {subject: "Java", teacher: "Dr. Suman"},
    {subject: "CNS", teacher: "Ms. Rohini"},
    {subject: "PSLP", teacher: "Ms. Yogita"},
];

function FavTeacher() {
    const items = [];
    teachers.forEach((teacher,index) => {
        if(teacher.subject === "DBMS"){
            items.push(
                <li key={index}>
                    <h2>Fav Teacher- </h2> {teacher.teacher}
                </li>
            );
        }
    });
    return(
        <>
        <h1>ForEach Method</h1>
        <p>Different from map in a way that it doesn't generate new array on its own</p>
        <ul>{ items }</ul>
        </>
    )
}
export default FavTeacher;
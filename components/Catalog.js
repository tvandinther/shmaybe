import { useEffect, useState } from "react";

export const Catalog = ({ searchValue, facultyValue, stageValue, yearValue }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("Search value: ", searchValue)
        console.log("faculty value: ", facultyValue)
        console.log("stage value: ", stageValue)
        console.log("year value: ", yearValue)  
        const body = {
            text: searchValue,
            faculty: facultyValue,
            level: stageValue,
            year: yearValue,
        }
        fetch("/api/courses", {
            method: 'POST',
            body: JSON.stringify(body),

        }).then(response => response.json()).then(data => {
            setData(data);
        });
    }, [searchValue, facultyValue, stageValue, yearValue]);
    
    console.log(data);
    return (
        <div>
            {data.map(course => (<CourseItem course={course} key={course.id}/>))}
        </div>

    )
}

function CourseItem({ course }) {
    const title = course.subject + " " + course.catalogNbr + ": " + course.title;
    return (
        <div key={course.id}>{title}</div>
    )
}

export default Catalog
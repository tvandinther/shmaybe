import { useEffect, useState } from "react";

export const Catalog = ({ searchValue }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/courses", {
            method: 'POST'

        }).then(response => response.json()).then(data => {
            setData(data.data);
        });
    }, [searchValue]);
    
    console.log(data);
    return (
        <div>
            {data.map(course => (<CourseItem course={course}/>))}
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
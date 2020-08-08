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
            {data.map(course => (<div key={course.id}>{course.title}</div>))}
        </div>

    )
}

function CourseItem({ course }) {
    return (
        <li>{course.name}</li>
    )
}

export default Catalog
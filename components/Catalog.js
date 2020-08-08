import { useEffect, useState } from "react";

export const Catalog = ({ searchValue }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("Search value: ", searchValue)
        const body = {
            text: searchValue,
            size: 20,
        }
        fetch("/api/courses", {
            method: 'POST',
            body: JSON.stringify(body),

        }).then(response => response.json()).then(data => {
            setData(data);
        });
    }, [searchValue]);
    
    console.log(data);
    return (
        <div>
            {data.map(course => (<CourseItem course={course} key={course.id}/>))}
        </div>

    )
}

function CourseItem({ course }) {
    const title = `${course.subject} ${course.catalogNbr}: ${course.title}`;
    return (
        <a href={`/course/${course.crseId}`}>
            <div key={course.id} className={`courseItemList ${course.mainProgram}`}>{title}</div>
        </a>
    )
}

export default Catalog
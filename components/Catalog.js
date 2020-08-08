import { useEffect, useState } from "react";
import Collapsible from 'react-collapsible';

export const Catalog = ({ searchValue, facultyValue, stageValue, yearValue }) => {
    let [data, setData] = useState([]);
    let [expanded, setExpanded] = useState(null);

    useEffect(() => {
        console.log("Search value: ", searchValue)
        console.log("faculty value: ", facultyValue)
        console.log("stage value: ", stageValue)
        console.log("year value: ", yearValue)
        const body = {
            text: searchValue,
            size: 20,
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
    }, [searchValue, stageValue, yearValue]);

    console.log(data);
    return (
        <div>
            {data.map(course => (<CourseItem expanded={expanded} setExpanded={setExpanded} course={course} key={course.id} />))}
        </div>

    )
}

function CourseItem({ course, expanded, setExpanded }) {
    const handleClick = () => {
        if (expanded != course.id) {
            setExpanded(course.id)
        }
        else {
            setExpanded(null)
        }
    }
    const title = (
        <div>
            <span onClick={handleClick} >{`${course.subject} ${course.catalogNbr}: ${course.titleLong}`}
            </span>
            <span>{`${course.year}`}</span>
        </div>
    )
    const preReq = `${course.rqrmntDescr}`.replace("Prerequisite:", "");

    return (
        <Collapsible key={course.id} className={`courseItemList ${course.mainProgram}`} trigger={title} open={expanded == course.id}>
            {course.rqrmntDescr && <p><b>Prerequisite:</b>{preReq}</p>}
            <b>Description:</b>
            {course.description && <p>{course.description}</p>}
            <a href={`/course/${course.crseId}`}><u>+ full description</u></a>
        </Collapsible>
    )
}

export default Catalog
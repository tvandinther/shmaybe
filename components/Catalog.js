import { useEffect, useState } from "react";
import Collapsible from 'react-collapsible';
import { getFacultyFromAcadGroup } from "../tools";
import Pagination from "./Pagination";
import Spinner from "./Spinner"

export const Catalog = ({ searchValue, facultyValue, stageValue, yearValue }) => {
    let [data, setData] = useState([]);
    let [ totalResults, setTotalResults ] = useState(0);
    let [ resultsFrom, setResultsFrom ] = useState(0);
    let [ loading, setLoading ] = useState(false);
    let [expanded, setExpanded] = useState(null);

    useEffect(() => {
        console.log("Search value: ", searchValue)
        console.log("faculty value: ", facultyValue)
        console.log("stage value: ", stageValue)
        console.log("year value: ", yearValue)
        const body = {
            text: searchValue,
            size: 10,
            faculty: facultyValue,
            level: stageValue,
            year: yearValue,
            from: resultsFrom,
        }
        setLoading(true)
        fetch("/api/courses", {
            method: 'POST',
            body: JSON.stringify(body),

        }).then(response => response.json()).then(data => {
            setData(data.data);
            console.log(data);
            setLoading(false);
            setTotalResults(data.total);
        });
    }, [searchValue, facultyValue, stageValue, yearValue, resultsFrom]);

    console.log(data);
    if (data.length) {
        return (
            <div>
                {loading && <Spinner/>}
                {data.map(course => (<CourseItem expanded={expanded} setExpanded={setExpanded} course={course} key={course.id} />))}
                <Pagination from={resultsFrom} results={data.length} total={totalResults} changePage={setResultsFrom}/>
            </div>
        )
    }
    else {
        return <p>No Results</p>
    }
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
    const faculty = getFacultyFromAcadGroup(course.acadGroup)
    const title = (
        <div className={`faculty-${faculty.name}`}>
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
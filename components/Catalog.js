import { useEffect, useState } from "react";
import Collapsible from 'react-collapsible';
import { getFacultyFromAcadGroup, mergeCourseResults } from "../tools";
import Pagination from "./Pagination";
import Spinner from "./Spinner"

export const Catalog = ({ searchValue, facultyValue, stageValue, yearValue, sizeValue }) => {
    let [data, setData] = useState([]);
    let [ totalResults, setTotalResults ] = useState(0);
    let [ resultsFrom, setResultsFrom ] = useState(0);
    let [ loading, setLoading ] = useState(false);
    let [expanded, setExpanded] = useState(null);

    useEffect(() => {
        const body = {
            size: sizeValue,
            faculty: facultyValue,
            level: stageValue,
            year: yearValue,
            from: resultsFrom,
        }
        setLoading(true)
        // get data
        let descSearch = fetch("/api/courses", {
            method: 'POST',
            body: JSON.stringify({
                ...body,
                text: searchValue
            })
        }).then(response => response.json())

        let subjectSearch = fetch("/api/courses", {
            method: 'POST',
            body: JSON.stringify({
                ...body,
                subject: searchValue
            })
        }).then(response => response.json())
        Promise.all([descSearch, subjectSearch]).then(([descResults, subjectResults]) => {
            let allResults = mergeCourseResults(subjectResults.data, descResults.data)
            console.log(allResults)
            setLoading(false)
            setTotalResults(Math.max(descResults.total + subjectResults.total))
            setData(allResults)
        })
    }, [searchValue, facultyValue, stageValue, yearValue, sizeValue, resultsFrom]);

    console.log(data);
    if (data.length) {
        return (
            <div>
                {loading && <Spinner className='spinner'/>}
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
    const handleOpening = () =>{
        setExpanded (course.id);
    }

    const handleClosing =()=>{
        setExpanded(null);
    }

    const faculty = getFacultyFromAcadGroup(course.acadGroup)
    const title = (
        <div className={`faculty-${faculty.name}`}>
            <span >{`${course.subject} ${course.catalogNbr}: ${course.titleLong}`}
            </span>
            <span style={{float: "right"}}>{`${course.year}`}</span>
        </div>
    )
    const preReq = `${course.rqrmntDescr}`.replace("Prerequisite:", "");

    return (
        <Collapsible key={course.id} className={`courseItemList faculty-${faculty.name}`} trigger={title} open={expanded == course.id} onTriggerOpening={handleOpening} onTriggerClosing={handleClosing}>
            <div className={`courseDescription courseDescription-${faculty.name}`}>
                {course.rqrmntDescr && <p><b>Prerequisite:</b>{preReq}</p>}
                <b>Description:</b>
                {course.description && <p>{course.description}</p>}
                <a href={`/course/${course.crseId}`}><u>+ full description</u></a>
            </div>
        </Collapsible>
    )
}

export default Catalog
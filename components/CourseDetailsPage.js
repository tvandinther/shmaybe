import { getFacultyFromAcadGroup } from "../tools/index.js"

export const CourseDetailsPage = ({ course }) => {
    
    const acadGroup = getFacultyFromAcadGroup(course.acadGroup);

    return (
        <div className="">
            <h1>{`${course.subject} ${course.catalogNbr}: ${course.title}`}</h1>
            <hr />
            <p><b>Career</b></p>
            <p><b>Points</b>{course.unitsAcadProg}</p>
            <p><b>Grading Basis</b>{course.gradingBasis}</p>
            <p><b>Course Components</b></p>
            <p><b>Academic Group</b>{acadGroup.title}</p>
            <p><b>Academic Organisation</b>{course.acadOrg}</p>
            <br />
            {course.rqrmntDescr && (<div><b>Enrolment Infomation</b>
                <p style={{ whiteSpace: "pre-line" }}>{course.rqrmntDescr}</p>
                <br />
            </div>)
            }

            <b>Description</b>
            <p>{course.description}</p>
        </div>
    )
}

export default CourseDetailsPage  
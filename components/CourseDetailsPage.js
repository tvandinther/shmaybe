import { getFacultyFromAcadGroup, getFacultyFromAcadOrg, getComponentFromComponentPrimary } from "../tools/index.js"

export const CourseDetailsPage = ({ course }) => {
    
    const acadGroup = getFacultyFromAcadGroup(course.acadGroup);
    const acadOrg = getFacultyFromAcadOrg(course.acadOrg);
    const primaryComponent = getComponentFromComponentPrimary(course.componentPrimary);

    return (
        <div className="">
            <h1>{`${course.subject} ${course.catalogNbr}: ${course.titleLong}`}</h1>
            <hr />
            <p><b>Points</b>{course.unitsAcadProg}</p>
            <p><b>Course Component</b>{primaryComponent}</p>
            <p><b>Academic Group</b>{acadGroup.title}</p>
            <p><b>Academic Organisation</b>{acadOrg}</p>
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
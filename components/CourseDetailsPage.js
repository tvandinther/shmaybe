import Layout from "./layout"

export const CourseDetailsPage = ({course}) => {
    return (
        <div className="">
            <h1>{course.title}</h1>
            <hr/>
            <p><b>Career</b></p>
            <p><b>Points</b>{course.unitsAcadProg}</p>
            <p><b>Grading Basis</b></p>
            <p><b>Course Components</b> </p>
            <p><b>Academic Group</b></p>
            <p><b>Academic Organisation</b></p>
            <br/>
            <b>Enrolment Infomation</b>
            <p style={{whiteSpace: "pre-line"}}>{course.rqrmntDescr}</p>
            <br/>
            <b>Description</b>
            <p>{course.description}</p>
        </div>
    )
}

export default CourseDetailsPage  
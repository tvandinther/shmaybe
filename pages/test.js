import { useState, useEffect } from "react"

export default function Test(props) {
	let [courses, setCourses] = useState({})

	const handleTestCourses = () => {
		fetch('/api/courses', { method: "POST"}).then(res => setCourses(res))
		// fetch('https://api.test.auckland.ac.nz/service/courses/v2/courses').then(res => setCourses(res))
	}

	return (
		<div>
			<button onClick={handleTestCourses}>Test Courses</button>
			<div>{JSON.stringify(courses)}</div>
		</div>
	)
}
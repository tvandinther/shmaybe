import { useState, useEffect } from "react"

export default function Test(props) {
	let [courses, setCourses] = useState({})
	let [course, setCourse] = useState({})

	const handleTestCourses = () => {
		fetch('/api/courses', { method: "POST"}).then(res => res.json().then(data => setCourses(data)))
		// const res = await fetch('/api/courses', { method: "POST"})
		// const data = await res.json()
		// setCourses(data)
		// fetch('https://api.test.auckland.ac.nz/service/courses/v2/courses').then(res => setCourses(res))
	}

	const handleTestCourse = () => {
		fetch('/api/course', { method: "POST", body: JSON.stringify({ courseid: "000001" })}).then(res => res.json().then(data => setCourse(data)))
	}

	return (
		<div>
			<button onClick={handleTestCourses}>Test Courses</button>
			<div>{JSON.stringify(courses)}</div>
			<button onClick={handleTestCourse}>Test Course</button>
			<div>{JSON.stringify(course)}</div>
		</div>
	)
}
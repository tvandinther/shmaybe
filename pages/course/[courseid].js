
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Spinner } from "../../components/Spinner";
import Layout from "../../components/layout";
import CourseDetailsPage from "../../components/CourseDetailsPage";

export default function t() {
	const router = useRouter()
	const { courseid } = router.query
	const [course, setCourse] = useState(null)

	useEffect(() => {
        const body = {
            courseid: courseid,
        }
        fetch("/api/course", {
            method: 'POST',
            body: JSON.stringify(body),
        }).then(response => response.json()).then(data => {
            setCourse(data);
        });
	}, [courseid]);
	
	if (course) {
		return (
			<Layout>
				<article>
					<h1>Course Details</h1>
					<CourseDetailsPage course={course} />
				</article>
			</Layout>
			)
	} else {
		return <Spinner/>
	}
}
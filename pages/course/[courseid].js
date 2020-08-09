
import { useRouter, Router } from 'next/router'
import { useEffect, useState } from 'react'
import { Spinner } from "../../components/Spinner";
import Layout from "../../components/layout";
import CourseDetailsPage from "../../components/CourseDetailsPage";

export default function t() {
	const router = useRouter()
	const { courseid } = router.query
	const [course, setCourse] = useState(null)

	useEffect(() => {
		if (courseid !== undefined) {
			const body = {
				courseid: courseid,
			}

			fetch("/api/course", {
				method: 'POST',
				body: JSON.stringify(body),
			}).then(response => response.json()).then(data => {
				setCourse(data);
			});
		}
	}, [courseid]);

	if (course) {
		return (
			<Layout>
				<article>
					<button onClick={() => router.back()} className="btn-blue bg-UoA margin-top">Back</button>
					<h1 className="courseDetailsHeading">Course Details</h1>
					<CourseDetailsPage course={course} />
				</article>
			</Layout>
		)
	} else {
		return <Layout> <Spinner  className='spinner'/> </Layout>
	}
}
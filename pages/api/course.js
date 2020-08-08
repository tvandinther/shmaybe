import nextConnect from 'next-connect'
import { course } from "../../stubs/courseStub"

const handler = nextConnect()
/*
	Expected body parameters:
		courseid: string
*/
handler.post(async (req, res) => {
	const data = JSON.parse(req.body)
	
	let url = new URL(`https://api.test.auckland.ac.nz/service/courses/v2/course/${data.courseid}`)
	try {
		const response = await fetch(url);
		const responseData = await response.json()
		res.json(responseData)
	} catch (error) {
		res.json({message: "error", error: error})
	}
})

export default handler

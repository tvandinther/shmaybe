import nextConnect from 'next-connect'
import { courses } from "../../stubs/courseStub"

const handler = nextConnect()

handler.post(async (req, res) => {
	const data = JSON.parse(req.body)
	/*
	year:
	subject:
	faculty:
	level:
	text:
	size:
	*/

	// STUB
	res.json(courses.data)
})

export default handler
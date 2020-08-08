import nextConnect from 'next-connect'
import {course} from "../../stubs/courseStub"

const handler = nextConnect()

handler.post(async (req, res) => {
	const data = JSON.parse(req.body)
	/*
	course id
	*/

	// STUB
	return course
})
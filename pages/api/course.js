import nextConnect from 'next-connect'
import {course} from "../../stubs/courseStub"

const handler = nextConnect()

handler.post(async (req, res) => {
	const data = JSON.parse(req.body)
	/*
	course id
	*/

	let url = new URL("https://api.test.auckland.ac.nz/service/courses/v2/course/" + req.body.id)

	return await fetch(url)
})
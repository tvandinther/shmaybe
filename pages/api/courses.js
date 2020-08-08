import nextConnect from 'next-connect'
import { courses } from "../../stubs/courseStub"

const handler = nextConnect()

handler.post(async (req, res) => {
	let data
	if (req.body) {
		data = JSON.parse(req.body)
	}
	else {
		data = {}
	}
	/*
	year:
	subject:
	faculty:
	level:
	text:
	size:
	*/

	// return courses

	res.json(courses.data)

	let url = new URL("https://api.test.auckland.ac.nz/service/courses/v2/courses")
	let params = {
		year: data.year,
		subject: data.subject,
		acadOrg: data.faculty,
		level: data.level,
		text: data.text,
		size: data.size
	}

	// Add params to URL object
	Object.entries(params).forEach(([ key, value ]) => {
		url.searchParams.append(key, value)
	})

	fetch(url).then(resp => {
		if (resp.data) res.json(resp.data)
	}).catch(err => {
		res.send(err)
	})

})

export default handler;

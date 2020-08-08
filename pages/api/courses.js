import nextConnect from 'next-connect'

const handler = nextConnect()

/*
	Expected body parameters:
		year?: string
		subject?: string
		faculty?: string
		level?: string
		text?: string
		size?: string
*/
handler.post(async (req, res) => {
	let data
	if (req.body) {
		data = JSON.parse(req.body)
	}
	else {
		data = {}
	}

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
		if (value !== undefined) url.searchParams.append(key, value)
	})

	try {
		const response = await fetch(url);
		const responseData = await response.json()
		res.json(responseData.data)
	} catch (error) {
		res.json({message: "error", error: error})
	}

	// fetch(url).then(resp => {
	// 	if (resp.size > 0) res.json(resp.data)
	// 	else res.json(resp)
	// }).catch(err => {
	// 	res.json(err)
	// })

})

export default handler;

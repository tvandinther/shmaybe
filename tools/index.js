import { acadGroupMap } from './data';

export function getFacultyFromAcadGroup(acadGroup) {
	return acadGroupMap[acadGroup]
}

export function getAllFaculties() {
	return Object.values(acadGroupMap)
}

export function mergeCourseResults(result1, result2) {
	let result = []
	let idsSeen = {}
	result1.forEach(course => {
		idsSeen[course.id] = true;
		result.push(course);
	})
	result2.forEach(course => {
		if (!idsSeen[course.id]) result.push(course);
	})
	return result;
}
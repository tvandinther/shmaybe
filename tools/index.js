import { acadGroupMap, acadOrgMap, componentCodesMap } from './data';

export function getFacultyFromAcadGroup(acadGroup) {
	return acadGroupMap[acadGroup]
}

export function getFacultyFromAcadOrg(acadOrg) {
	return acadOrgMap[acadOrg]
}

export function getComponentFromComponentPrimary(componentPrimary) {
	return componentCodesMap[componentPrimary]
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
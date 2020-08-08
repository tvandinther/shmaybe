import { acadGroup } from './data';

export function getFacultyFromAcadGroup(acadGroup) {
	return acadGroupMap[acadGroup]
}

export function getAllFaculties() {
	return Object.values(acadGroup)
}
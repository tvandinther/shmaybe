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
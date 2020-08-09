export default function Pagination(props) {
	const { results, from, total, changePage } = props

	const handleNext = () => {
		let nextIndex = Math.min(from + results, total - 1)
		changePage(nextIndex)
	}

	const handlePrev = () => {
		let prevIndex = Math.max(from - results, 0)
		changePage(prevIndex)
	}

	return (
		<div style={{ margin: "auto", width: "fit-content"}}>
			<button className="bg-UoA hover:bg-blue-700 text-white font-bold px-4 border border-blue-700 rounded m-2" onClick={handlePrev}>⤌</button>
				<span>Showing results {from + 1}-{from + results} of {total}</span>
			<button className="bg-UoA hover:bg-blue-700 text-white font-bold px-4 border border-blue-700 rounded m-2" onClick={handleNext}>⤍</button>
		</div>
	)
}
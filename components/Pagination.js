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
		<div>
			<button onClick={handlePrev}>⤌</button>
				<span>Showing results {from + 1}-{from + results} of {total}</span>
			<button onClick={handleNext}>⤍</button>
		</div>
	)
}
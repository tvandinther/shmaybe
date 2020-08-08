
import { useRouter } from 'next/router'

export default function t() {
	const router = useRouter()
	const { courseid } = router.query

	return <span>{courseid}</span>
}
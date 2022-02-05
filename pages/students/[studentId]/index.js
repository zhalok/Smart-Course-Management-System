import { useRouter } from 'next/router';

export default function Student() {
	const router = useRouter();
	const { student } = router.query;
	return <div>{student}</div>;
}

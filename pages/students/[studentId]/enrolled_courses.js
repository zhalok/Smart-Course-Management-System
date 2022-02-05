import { useRouter } from 'next/router';
export default function EnrolledCourses() {
	const { student } = useRouter().query;

	return <div>Enrolled Questions of Student {student}</div>;
}

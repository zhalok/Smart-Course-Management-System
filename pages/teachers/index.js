export default function Teachers({ data }) {
	return <div>Hello {data}</div>;
}

export function getServerSideProps(context) {
	const { req } = context;
	console.log(req.cookie);
	return {
		props: {
			data: 'hello',
		},
	};
}

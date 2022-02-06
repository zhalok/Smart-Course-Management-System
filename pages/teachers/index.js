export default function Teachers({ data }) {
	return <div>Hello</div>;
}

export async function getServerSideProps(context) {
	const { req } = context;

	return {
		props: {
			data,
		},
	};
}

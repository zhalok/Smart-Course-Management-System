const proimseGenerator = (command) => {
	return new Promise((resolve, reject) => {
		if (command == 'yes') resolve('Yes');
		else reject('No');
	});
};

const func = async () => {
	try {
		const res = await proimseGenerator('No');
		console.log(res);
	} catch (e) {
		console.log(e);
	}

	console.log('hi');
	// console.log(res);
};

func();

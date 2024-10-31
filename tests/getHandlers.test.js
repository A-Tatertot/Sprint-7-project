// eslint-disable-next-line no-undef
const config = require('../config');

///*
test('status should be 200', async () => {
	let actualStatus; //this should be a declared variable
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
        actualStatus = response.status;
		
	} catch (error) {
		console.error(error);
	}
    expect(actualStatus).toBe(200);
	
});


test('getting response to see if third place in the data array is Food City', async () => {
	let data; //this should be a declared variable
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
			
		});
		
        data = await response.json();
	
	} catch (error) {
		console.error(error);
	}	
	expect(data[2]["name"]).toBe("Food City")

});

/*
test('', async () => {
	try {
		const response = await fetch(`${config.API_URL}/your/endpoint`);
	} catch (error) {
		console.error(error);
	}
});
*/
//*/
// eslint-disable-next-line no-undef
const config = require('../config');


///*
const requestBody = { //this data goes by array
	
	name: 'Everything You Need', workingHours: { start: 7, end: 23 } ,
  	name: 'Fresh Food', workingHours: { start: 8, end: 23 } ,
  	name: 'Food City', workingHours: { start: 8, end: 21 } ,
  	name: 'Big World', workingHours: { start: 5, end: 20 } 
}

///*
test('status should be 200', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
        actualStatus = response.status;
		
	} catch (error) {
		console.error(error);
	}
    expect(actualStatus).toBe(200);
	console.log(actualStatus);
	
});


test('getting response to see if third place in the data array is Food City', async () => {
	let data;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
			//body: JSON.stringify(requestBody)
		});
		
        data = await response.json();
		console.log(data[2]);
		
		//let ResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	//let data = await response.json();
	//const data = await JSON.stringify(response); //note WTF how can I compare the strings
	
	console.log(requestBody);
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
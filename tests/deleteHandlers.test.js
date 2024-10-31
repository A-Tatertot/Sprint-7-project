// eslint-disable-next-line no-undef
const config = require('../config');


// /*

test('response status should be 200', async () => {
	let actualResponseCode; 
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, { 
			method: 'DELETE',
			
		});
		
		actualResponseCode = await response.status; 
		//console.log(actualStatusCode);
	} catch (error) {
		console.error(error);
	}
	
	expect(actualResponseCode).toBe(200);
	
});


test('response should verify id 7 deletion', async () => {
	let actualResponseCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		actualResponseCode= await response.json();
		
	} 
	catch (error) {
		console.error(error);
	}
	//console.log(actualResponseCode);
	expect(actualResponseCode["ok"]).toBe(true);
	
});


/*
test('making sure that the deleted code is gone', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/7`, {
			method: 'DELETE',
		});
		actualStatusCode = await response.json();
	} catch (error) {
		console.error(error);
	}
	console.log(actualStatusCode);
	//console.log(actualStatusCode('code'));
	//expect(actualStatusCode).toBeUndefined();//equals null
	expect(actualStatusCode[('code')]).toEqual(404);
	
});
*/


//*/
//end
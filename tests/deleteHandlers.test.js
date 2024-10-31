// eslint-disable-next-line no-undef
const config = require('../config');

let actualStatusCode;
// /*

test('response status should be 200', async () => {
	
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, { //works in postman
			method: 'DELETE',
			
		});
		actualStatusCode = await response.status; //need this to actually transport the hecking variable
		//console.log(actualStatusCode); //why can I not call this
	} catch (error) {
		console.error(error);
	}
	console.log(actualStatusCode);
	expect(actualStatusCode).toBe(200);
	
});


test('deleting the order with ID 7 and verifying its deletion', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/7`, {
			method: 'DELETE',
		});
		actualResponseCode = await response.json();// the fact that this does not translate lower as easily infuriates me
		console.log(actualResponseCode);//hope you can chuckle at these comments
		expect(actualResponseCode).toEqual({ok: true});
	} 
	catch (error) {
		console.error(error);
	}
	
	//console.log(actualStatusCode('code'));
	//expect(actualStatusCode).toBeUndefined();//equals null
	
	
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
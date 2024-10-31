// eslint-disable-next-line no-undef
const config = require('../config');

let actualResponseBody;
///*
const requestBody = {
	"products": [
		{
			"id": 5,
			"quantity": 1
		},
		{
			"id": 4,
			"quantity": 5
		}
	]
}

const expectedOutput = { //OK. SO. THIS WORKS, BUT IT'S NOT THE SAME IN THE API DOCS STUFF. GLITCH? ASK

	"Everything You Need": {
		"Sprite Soft Drink": true,
		"Gourmet Popcorn Kernels": true,
		"Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free": false
	},
	"Food City": {
		"Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free": true,
		"Sprite Soft Drink": true,
		"Gourmet Popcorn Kernels": false
	},
	"Big World": {
		"Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free": true,
		"Sprite Soft Drink": false,
		"Gourmet Popcorn Kernels": false
	},
	"Fresh food": {
		"Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free": true,
		"Sprite Soft Drink": true,
		"Gourmet Popcorn Kernels": false
	}
}
/*
const actualOutput = { //OK. SO. THIS WORKS, BUT IT'S NOT THE SAME IN THE API DOCS STUFF. GLITCH? ASK

	'Everything You Need': { 'Sprite Soft Drink': true, 'Fruit Power Juice - Litchi': false },
	'Food City': { 'Sprite Soft Drink': true, 'Fruit Power Juice - Litchi': true },
	'Big World': { 'Fruit Power Juice - Litchi': false, 'Sprite Soft Drink': false },
	'Fresh Food': { 'Sprite Soft Drink': true, 'Fruit Power Juice - Litchi': true }
}
*/
//this checks 200
test('response status should be 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody).toBe(200);

});

//this posts
test('Whether the post will return the documented expected outcome', async () => {
    try {
		let responseBody; //need this else code doesnt work proper
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});//but it's not actually checking the response?
		responseBody = await response.json();
		console.log(ResponseBody);
		console.log(expectedOutput);

	} 
	catch (error) {
		console.error(error);
	}
	expect(responseBody).toEqual(expectedOutput);

	/* this is the actual output
  'Everything You Need': { 'Sprite Soft Drink': true, 'Fruit Power Juice - Litchi': false },
  'Food City': { 'Sprite Soft Drink': true, 'Fruit Power Juice - Litchi': true },
  'Big World': { 'Fruit Power Juice - Litchi': false, 'Sprite Soft Drink': false },
  'Fresh Food': { 'Sprite Soft Drink': true, 'Fruit Power Juice - Litchi': true }

	*/
	//will be false

});

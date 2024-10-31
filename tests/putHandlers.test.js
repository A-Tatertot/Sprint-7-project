// eslint-disable-next-line no-undef
const config = require('../config');

// /*

const requestBody = {

    "name": "My modified kit",
    "productsList": [
        {
            "id": 1,
            "quantity": 4
        },
        {
            "id": 5,
            "quantity": 2
        },
        {
            "id": 3,
            "quantity": 1
        },
        {
            "id": 4,
            "quantity": 1
        }
    ]

}

test('response status should be 200', async () => {
    let actualStatusCode;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        actualStatusCode = response.status;

    } catch (error) {
        console.error(error);
    }
    expect(actualStatusCode).toBe(200);
});

test('response body should be equal to expected response body in documentation', async () => {
    let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        actualResponseBody = await response.json();
        console.log(actualResponseBody)
    } catch (error) {
        console.error(error);
    }
    expect(actualResponseBody).toHaveProperty('ok', true);
});

//*/
//for making HTTPS requests to the express app
const request = require('supertest');
//importing the  app object for testing tested
const app = require('./app');


it('should add two valid numbers', async () => {
    const response = await request(app)
        .get('/add')
        .query({ first: 2, second: 3 });

        //successful request
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ success: true, sum: 5 });
});

it('should handle invalid input', async () => {
    const response = await request(app)
        .get('/add')
        .query({ first: 'a', second: 'b' });
        
    //bad request
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ success: false, message: 'Invalid numbers provided' });
});

it('should handle missing parameters', async () => {
    const response = await request(app)
        .get('/add');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ success: true, sum: 0 });
});



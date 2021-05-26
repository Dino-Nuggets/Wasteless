const request = require('supertest');

const server = 'http://localhost:3000';

describe('Route integration', () => {
  // Testing the routes for /
  describe('/', () => {
    describe('GET', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it('responds with 200 status and application/json content type', () => request(server)
        .get('/')
        .expect('Content-Type', /application\/json/)
        .expect(200));
    });
  });

  // Testing the routes for /food
  // xdescribe( '/food')
  describe('POST', () => {
    // Note that we return the evaluation of `request` here! It evaluates to
    // a promise, so Jest knows not to say this test passes until that
    // promise resolves. See https://jestjs.io/docs/en/asynchronous
    it('responds with 200 status and text/html content type', () => request(server)
      .post('/food')
      .expect('Content-Type', /application\/json/)
      .expect(200));
  });
  // Testing routes for /food/:item
  // xdescribe('/food/:item', () => {
  //   xdescribe('delete', () => {
  //     xit('responds with 200 status and application/json content type', () => request(server)
  //       // .get('/markets') NOW U FUGGED UP NOW U FUGGED UP .delete(/food/:item)
  //       .expect('Content-Type', /application\/json/)
  //       .expect(200));
});

// put('/food/:item',
// xdescribe('/food/:item', ()=> {
//   xdescribe('put', () => {
//     xit('update food items', () => request(server)
//     .put('/food/:item')
//     .expect('Content-Type', /application\/json/)
//     .expect((res) => {
//   console.log(res.body);
//       if (!res.body) throw new Error('missing markets list');
//   })))
//   )})
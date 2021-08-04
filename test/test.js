const supertest = require('supertest');
const router = require('../src/router');

test('Home route returns a status code of 200', (done) => {
    expect.assertions(1);
    supertest(router)
        .get('/')
        .expect(200)
        .expect('Content-Type', /html/)
        .end((err, res) => {
            if(err) return done(err);
            expect(res.statusCode).toBe(200);
            done();
        });
});

test('Movies name returns a status code of 200', (done) => {
    expect.assertions(1);
    supertest(router)
        .get('/movies-names')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
            if(err) return done(err);
            expect(res.statusCode).toBe(200);
            done();
        });
});

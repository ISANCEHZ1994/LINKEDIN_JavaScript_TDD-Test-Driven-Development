import sinon from 'sinon';
import request from 'supertest';
import { expect } from 'chai'
import db from './db';
import { app } from './server'

// TESTS FOR ENDPOINTS - rarely used but still good to know!

describe('GET/users/:username', () => {
    it('sends the correct response when a username is found' , async () => {
        const fakeData = { 
            id: '123',
            username: 'abc',
            email: 'yourmom.com'
        };

        const stub = sinon
        .stub(db, 'getUserByUsername')
        .resolves(fakeData);

       await request(app).get('/users/abc') // how to write the integration tests for a server endpoint
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(fakeData);

        expect(stub.getCall(0).args[0]).to.equal('abc')

        stub.restore();
    })

    it('sends the correct response when there is an error', async () => {
        const fakeError = { message: 'something went wrong!!'} // this is just to simulate what would happend if our database communication encountered an error

        const stub = sinon.stub(db,'getUserByUsername')
            .throws(fakeError)
        await request(app).get('/users/abc')
            .expect(500)
            .expect('Content-Type', /json/)
            .expect(fakeError);
        stub.restore();
    })
    it('returns the appropriate response when the user is not found', async () => {
        const stub = sinon.stub(db,'getUserByUsername')
            .resolves(null);

        await request(app).get('/users/def') // here we are using supertest to test our 
            .expect(404);

        stub.restore();
    })

})
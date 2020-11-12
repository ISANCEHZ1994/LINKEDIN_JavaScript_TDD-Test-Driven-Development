import { getUserByUsername } from './db';
import { expect } from 'chai';
// import { async } from 'regenerator-runtime';
// import { MongoClient } from 'mongodb';
import { getDatabaseData, resetDatabase, setDatabaseData } from './test-helpers';
import { async } from 'regenerator-runtime';
 // chai-exclude - allows us to check if our actual results match the expected results excluding certain properties

// WE ARE GOING TO REFACTOR THIS CODE BECAUSE THERE IS/WAS AN UNGODLY AMOUNT OF CODE FOR THIS TESTING FILES

describe('getUserByUsername', async () => {
    afterEach('reset the database', async () => {
        await resetDatabase();
    })
    it('get the correct user from the database given a username', async () => {
       
        const fakeData = [{ // created some dummy data
            id: '123',
            username: 'abc',
            email: 'yourmom.com'
        }, {
            id: '124',
            username: 'wrong',
            email: 'NOTyourmom.com'
        }];

        await setDatabaseData('users', fakeData)

        const actual = await getUserByUsername('abc'); // real testing logic here, creating a new constant to hold the result of our get username function
        const finalDBState = await getDatabaseData('users')
   

        const expected = { // the answer that we want 
            id: '123',
            username: 'abc',
            email: 'yourmom.com'
        };
        
        // HERE WE ARE MAKING ASSERTIONS
        expect(actual).excludingEvery('_id').to.deep.equal(expected); 
        // referance to mocha-setup file because our code fetchs from mongodb and we want our object to make senese
        expect(finalDBState).excludingEvery('_id').to.deep.equal(fakeData);  // here is our seciond check to make sure that our final db state equals to the initial db state
        // Ignoring object properties in Mocha basically 

    });

    it('returns null when the user is not found', async () => {
        await setDatabaseData('users', [{
            id: '999',
            username: 'XYZ',
            email: 'nobodycares.com'
        }]);

        const actual = await getUserByUsername('def')

        expect(actual).to.be.null;
    });
});

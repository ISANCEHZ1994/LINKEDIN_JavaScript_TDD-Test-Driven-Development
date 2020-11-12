import { MongoClient } from 'mongodb'

export const setDatabaseData = async (collectionName, data) => {
    const client = await MongoClient.connect( // we (npm install mongodb) are MongoDB server
            `mongodb://localhost:27017/TEST_DB`,{ // configuration object that will contain some keywords for mongodb 
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            }
        );

        const db = client.db('TEST_DB')
            
        // await db.collection('users').insertMany(fakeData); // this sets up the database how we want
        // const actual = await getUserByUsername('abc'); // real testing logic here, creating a new constant to hold the result of our get username function
        // const finalDBState = await db.collection('users').find().toArray(); // we want to get the state of the database sense we have the user from the username function
        // await db.dropDatabase(); // this resets our database so that it doesnt affect our other tests that we run
        // client.close();

        // Switched it up beacause we are no longer in the test file
        await db.collection(collectionName).insertMany(data);
        client.close();
};

export const getDatabaseData = async (collectionName) => {
    const client = await MongoClient.connect(
    `mongodb://localhost:27017/TEST_DB`,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    }
);

    const db = client.db('TEST_DB');

    const result = await db.collection(collectionName).find().toArray();

    client.close();

    return result;
};

export const resetDatabase = async () => {
    const client = await MongoClient.connect(
        `mongodb://localhost:27017/TEST_DB`,{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        }
    );
    
    const db = client.db('TEST_DB');
    
   await db.dropDatabase();
    
    client.close();
    
};
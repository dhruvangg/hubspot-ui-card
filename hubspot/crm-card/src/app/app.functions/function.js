// serverless/get-data.js
const { MongoClient } = require('mongodb');

exports.main = async (context, sendResponse) => {
  const uri = 'mongodb+srv://champ:champdecay@champ.cxkmd.mongodb.net/hubspot';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('hubspot');
    const collection = db.collection('datas');

    const data = await collection.find({}).limit(10).toArray();

    return {
      statusCode: 200,
      body: data,
      headers: {
        'Content-Type': 'application/json',
      },
    };

  } catch (error) {

    return {
      statusCode: 500,
      body: { error: 'Failed to fetch quote', error: error.message },
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } finally {
    await client.close();
  }
};

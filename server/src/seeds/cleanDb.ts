import models from '../models/index.js';
import db from '../config/connection.js';
//import { model } from 'mongoose';

export default async (modelName: "Question", collectionName: string) => {
  try {
    console.log("Models object:", models);  // Debugging line
    console.log(`Trying to access model: ${modelName}`, models[modelName]);  // Debugging line

    
    let modelExists = await (models[modelName]?.db?.db?.listCollections({
      name: collectionName
    }).toArray() ?? []);

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    console.error("Error in cleanDb, err");
    throw err;
  }
}

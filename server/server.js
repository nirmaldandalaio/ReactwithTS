import express from 'express';
import mongoose from 'mongoose';
import mongodb from 'mongodb';

const app = express();
const dbUrl = 'mongodb://localhost:27017/nighthawk';

//Connecting to the database
mongodb.MongoClient.connect(dbUrl, (err, client) => {
    console.log("Successfully connected to the DB");
    console.log(client);
    let db = client.db('nighthawk');
    app.get('/api/articles', (req, res) => {
        db.collection('articles').find({}).toArray((err, articles) => {
            res.json({ articles });
        })
    });
    
    app.listen(8080, () => console.log('Server is running on localhost:8080'));
});
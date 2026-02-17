import "dotenv/config";
import app from "./app.js";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);

async function startServer() {
    try{
        const db = client.db("image-uploader");
        await client.connect();
        console.log("Connected to MongoDB");
        app.locals.db = db; // Make the database accessible in routes

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        })
    }catch(err){
        console.error("Failed to connect to MongoDB", err);
    };
};

startServer();
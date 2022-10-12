import bot from './bot';
import './commands';
import mongoose from "mongoose";
import {db} from "./config";

(async () => {
    try {
        await mongoose.connect(db.DB_MONGODB_URI, {
            dbName: db.DB_NAME
        }, () => {
            console.log('Connected to database');
        })

        console.log("MongoDB Connected...");
    } catch (err) {
        //console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }

    bot.launch();
})();
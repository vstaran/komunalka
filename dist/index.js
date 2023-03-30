"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = __importDefault(require("./bot"));
require("./commands");
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
(async () => {
    try {
        mongoose_1.default.set("strictQuery", true);
        await mongoose_1.default.connect(config_1.db.DB_MONGODB_URI, {
            dbName: config_1.db.DB_NAME
        }, () => {
            console.log('Connected to database');
        });
        console.log("MongoDB Connected...");
    }
    catch (err) {
        //console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
    bot_1.default.launch();
})();
//# sourceMappingURL=index.js.map
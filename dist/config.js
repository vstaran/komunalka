"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.sessionCollectionName = exports.godId = exports.token = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const showError = (msg) => {
    throw new Error(msg);
};
exports.token = process.env.TOKEN || showError('token not found in .env');
exports.godId = Number.parseInt(process.env.GOD_ID || '0');
exports.sessionCollectionName = process.env.SESSION_COLLECTION_NAME || 'sessions';
exports.db = {
    DB_MONGODB_URI: process.env.DB_MONGODB_URI || showError('DB_MONGODB_URI not found in .env'),
    DB_NAME: process.env.DB_NAME || showError('DB_NAME not found in .env'),
    // port: Number.parseInt(process.env.DB_PORT || showError('DB_PORT not found in .env')),
    // name: process.env.DB_NAME || showError('DB_NAME not found in .env'),
    // username: process.env.DB_USERNAME || showError('DB_USERNAME not found in .env'),
    // password: process.env.DB_PASSWORD || showError('DB_PASSWORD not found in .env'),
    // maxPool: Number.parseInt(process.env.DB_MAX_POOL || showError('DB_MAX_POOL not found in .env')),
};
//# sourceMappingURL=config.js.map
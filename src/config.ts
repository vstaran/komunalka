import { config } from 'dotenv';
import { Context } from "telegraf";

config();

const showError = (msg: string) => {
    throw new Error(msg);
}

export const token = process.env.TOKEN || showError('token not found in .env');

export const godId = Number.parseInt(process.env.GOD_ID || '0');

export const sessionCollectionName = process.env.SESSION_COLLECTION_NAME || 'sessions';

export const db = {
    DB_MONGODB_URI: process.env.DB_MONGODB_URI || showError('DB_MONGODB_URI not found in .env'),
    DB_NAME: process.env.DB_NAME || showError('DB_NAME not found in .env'),
    // port: Number.parseInt(process.env.DB_PORT || showError('DB_PORT not found in .env')),
    // name: process.env.DB_NAME || showError('DB_NAME not found in .env'),
    // username: process.env.DB_USERNAME || showError('DB_USERNAME not found in .env'),
    // password: process.env.DB_PASSWORD || showError('DB_PASSWORD not found in .env'),
    // maxPool: Number.parseInt(process.env.DB_MAX_POOL || showError('DB_MAX_POOL not found in .env')),
}

export interface AppContext extends Context {
    locale?: any
    session?: any
    match?: any
}
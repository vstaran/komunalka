import { session } from 'telegraf-session-mongoose';
import { sessionCollectionName } from './../config';

export const appSession = session({ sessionName: 'session', collectionName: sessionCollectionName });
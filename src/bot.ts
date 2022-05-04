import { Telegraf } from 'telegraf';
import { MyContext, token } from './config';

export const bot = new Telegraf<MyContext>(token);
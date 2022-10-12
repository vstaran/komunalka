import { Telegraf } from 'telegraf';
import { AppContext, token } from './config';
import { appSession } from './middlewares/session';
import { appLang } from './middlewares/lang';

const bot = new Telegraf<AppContext>(token);

bot.use(appSession);
bot.use(appLang);

/**
 * for debug
 * bot.use(Telegraf.log());
 */

export default bot;
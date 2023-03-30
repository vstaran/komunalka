import { Telegraf } from 'telegraf';
import { AppContext, token } from './config';
import { appSession } from './middlewares/session';
import TelegrafI18n from 'telegraf-i18n';
import path from 'path';


const bot = new Telegraf<AppContext>(token);

const i18n = new TelegrafI18n({
    defaultLanguage: 'en',
    allowMissing: false, // Default true
    directory: path.resolve(__dirname, 'locales')
})

// Middleware to handle errors
bot.catch((err: unknown, ctx: AppContext) => {
    const error = err as Error;
    console.error("Error occurred:", error.message);
    ctx.reply("An error occurred. Please try again later.");
});

bot.use(appSession);
bot.use(i18n.middleware());

/**
 * for debug
 * bot.use(Telegraf.log());
 */

export default bot;
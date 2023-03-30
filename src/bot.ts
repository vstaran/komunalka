import { Telegraf } from 'telegraf';
import { AppContext, token } from './config';
import { appSession } from './middlewares/session';
import i18next from 'i18next';
import { join } from 'path';
import i18nextBackend from 'i18next-fs-backend';

const bot = new Telegraf<AppContext>(token);

i18next.use(i18nextBackend).init({
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    backend: {
      // Load translations from the 'locales' directory
      loadPath: join(__dirname, 'locales', '{{lng}}.json'),
    },
});

// Middleware to handle errors
bot.catch((err: unknown, ctx: AppContext) => {
    const error = err as Error;
    console.error("Error occurred:", error.message);
    ctx.reply("An error occurred. Please try again later.");
});

bot.use(appSession);


bot.use(async (ctx, next) => {
    const locale = ctx.from?.language_code;
    await i18next.changeLanguage(locale);
    ctx.i18n = i18next;
    return next();
});

//bot.use(i18n.middleware());

/**
 * for debug
 * bot.use(Telegraf.log());
 */

export default bot;
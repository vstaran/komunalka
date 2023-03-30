"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const config_1 = require("./config");
const session_1 = require("./middlewares/session");
const i18next_1 = __importDefault(require("i18next"));
const path_1 = require("path");
const i18next_fs_backend_1 = __importDefault(require("i18next-fs-backend"));
const bot = new telegraf_1.Telegraf(config_1.token);
i18next_1.default.use(i18next_fs_backend_1.default).init({
    lng: 'en',
    fallbackLng: 'en',
    backend: {
        // Load translations from the 'locales' directory
        loadPath: (0, path_1.join)(__dirname, 'locales', '{{lng}}.json'),
    },
});
// Middleware to handle errors
bot.catch((err, ctx) => {
    const error = err;
    console.error("Error occurred:", error.message);
    ctx.reply("An error occurred. Please try again later.");
});
bot.use(session_1.appSession);
bot.use(async (ctx, next) => {
    const locale = ctx.from?.language_code;
    await i18next_1.default.changeLanguage(locale);
    ctx.i18n = i18next_1.default;
    return next();
});
//bot.use(i18n.middleware());
/**
 * for debug
 * bot.use(Telegraf.log());
 */
exports.default = bot;
//# sourceMappingURL=bot.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const config_1 = require("./config");
const session_1 = require("./middlewares/session");
const telegraf_i18n_1 = __importDefault(require("telegraf-i18n"));
const path_1 = __importDefault(require("path"));
const bot = new telegraf_1.Telegraf(config_1.token);
const i18n = new telegraf_i18n_1.default({
    defaultLanguage: 'en',
    allowMissing: false,
    directory: path_1.default.resolve(__dirname, 'locales')
});
// Middleware to handle errors
bot.catch((err, ctx) => {
    const error = err;
    console.error("Error occurred:", error.message);
    ctx.reply("An error occurred. Please try again later.");
});
bot.use(session_1.appSession);
bot.use(i18n.middleware());
/**
 * for debug
 * bot.use(Telegraf.log());
 */
exports.default = bot;
//# sourceMappingURL=bot.js.map
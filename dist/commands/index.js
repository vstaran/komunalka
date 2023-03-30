"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const start_1 = require("./start");
const help_1 = require("./help");
const uptime_1 = require("./uptime");
const sticker_1 = require("./sticker");
const info_1 = require("./info");
const lang_1 = require("./lang");
const address_1 = require("./address");
const bot_1 = __importDefault(require("../bot"));
bot_1.default.start(start_1.start);
bot_1.default.help(help_1.help);
bot_1.default.command('uptime', uptime_1.uptime);
bot_1.default.command('info', info_1.info);
bot_1.default.command('lang', lang_1.lang);
// Передати показання
/**
 * 1. Вибрати адресу
 * 2. Ввести показники
 * - Газ
 * - Вода
 * - Електроенергія
 * - Вивеcти звіт по введеній інформації з повідомленням - Все вірно / Відхилити
 */
// Список показань
/**
 * - Вивести 3-ри попередніх
 * Кнопку вивести шоб можна було подивитися ще одну попереню
 *
 */
// Адреси
/**
 * 1. Введення міста
 * 2. Введення вулиці
 * 3. Введення типів лічильників і їх кількість
 */
bot_1.default.action('addAddressStep1', address_1.addAddressStep1);
bot_1.default.action('listAddress', address_1.listAddress);
bot_1.default.action('removeAddressList', address_1.removeAddressList);
bot_1.default.action(/removeAddress:(.+)/, address_1.removeAddress);
bot_1.default.action('mainMenu', start_1.start);
bot_1.default.on('sticker', sticker_1.sticker);
bot_1.default.on('text', async (ctx) => {
    const text = ctx.message?.text;
    switch (ctx.session.action) {
        case "addAddressStep2": return await (0, address_1.addAddressStep2)(ctx, text);
        case "addAddressStep3": return await (0, address_1.addAddressStep3)(ctx, text);
    }
});
bot_1.default.action(/.+/, (ctx) => {
    return ctx.answerCbQuery(`Oh, ${ctx.match[0]}! Great choice`);
});
// bot.on('callback_query', async  (ctx) => {
//     console.log(ctx.from)
//
//     // Explicit usage
//     //ctx.telegram.answerCbQuery(ctx.callbackQuery.id)
//     console.log('callback_query');
//     // Using context shortcut
//     await ctx.answerCbQuery()
// })
// Enable graceful stop
process.once('SIGINT', () => bot_1.default.stop('SIGINT'));
process.once('SIGTERM', () => bot_1.default.stop('SIGTERM'));
bot_1.default.catch((e) => { console.error(e); });
//# sourceMappingURL=index.js.map
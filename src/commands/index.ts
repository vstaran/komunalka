import { start } from './start';
import { help } from './help';
import { uptime } from './uptime';
import { sticker } from './sticker';
import { info } from './info';
import { lang } from './lang';
import {
    addAddressStep1,
    addAddressStep2,
    addAddressStep3,
    removeAddressList,
    removeAddress,
    listAddress } from './address';

import bot from '../bot';

bot.start(start);
bot.help(help);

bot.command('uptime', uptime);
bot.command('info', info);
bot.command('lang', lang);

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
bot.action('addAddressStep1', addAddressStep1);
bot.action('listAddress', listAddress);
bot.action('removeAddressList', removeAddressList);
bot.action(/removeAddress:(.+)/, removeAddress);





bot.action('mainMenu', start);


bot.on('sticker', sticker);
bot.on('text', async (ctx) => {
    const text = ctx.message?.text;

    switch (ctx.session.action) {
        case "addAddressStep2": return await addAddressStep2(ctx, text);
        case "addAddressStep3": return await addAddressStep3(ctx, text);
    }
})


bot.action(/.+/, (ctx) => {
    return ctx.answerCbQuery(`Oh, ${ctx.match[0]}! Great choice`)
})

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
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

bot.catch((e) => { console.error(e) });
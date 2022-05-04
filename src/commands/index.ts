import { start } from './start';

import { stats } from './stat';

//import { processMessage } from './process-message';
import { bot } from '../bot';

bot.use(async (ctx, next) => {
    const locale: string = (ctx.message?.from.language_code)? ctx.message?.from.language_code:"uk"
    ctx.locale = await import(`../locales/${locale}.json`)
    return next()
})



bot.start(start);

bot.command('/stats', stats);

bot.hears('apple', ctx => {
    //console.log(ctx.from)
    let priceMessage = `Great, Your total pay will be kes 100`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "pay on delivery", callback_data: 'delivery' },
                    { text: "Mobile money", callback_data: 'mobile' }
                ],

            ]
        }
    })
})


// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

bot.catch((e) => { console.error(e) });
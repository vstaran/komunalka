import { AppContext } from './../config'

export const start = async (ctx: AppContext) => {
    ctx.session.action = null;

    await ctx.reply(ctx.locale.startMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: ctx.locale.passReadings, callback_data: 'passReadings' },
                    { text: ctx.locale.historyReadings, callback_data: 'historyReadings' }
                ],
                [
                    { text: ctx.locale.addAddress, callback_data: 'addAddressStep1' },
                    { text: ctx.locale.listAddress, callback_data: 'listAddress' }
                ],
                [
                    { text: ctx.locale.mainMenu, callback_data: 'mainMenu' },
                ],
            ]
        }
    })

}
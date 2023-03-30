import { AppContext } from './../config'

export const start = async (ctx: AppContext) => {
    ctx.session.action = null;

    await ctx.reply(ctx.i18n.t('startMessage'), {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: ctx.i18n.t('passReadings'), callback_data: 'passReadings' },
                    { text: ctx.i18n.t('historyReadings'), callback_data: 'historyReadings' }
                ],
                [
                    { text: ctx.i18n.t('addAddress'), callback_data: 'addAddressStep1' },
                    { text: ctx.i18n.t('listAddress'), callback_data: 'listAddress' }
                ],
                [
                    { text: ctx.i18n.t('mainMenu'), callback_data: 'mainMenu' },
                ],
            ]
        }
    })

}
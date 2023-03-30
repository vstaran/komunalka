"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
const start = async (ctx) => {
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
    });
};
exports.start = start;
//# sourceMappingURL=start.js.map
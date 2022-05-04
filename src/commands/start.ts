import { MyContext } from './../config';

export const start = (ctx: MyContext) => {

    ctx.deleteMessage();
    ctx.reply('Start message', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: ctx.locale?.PassMeterReadings, callback_data: 'orders' },
                    { text: 'Історія показань', callback_data: 'orders' }
                ],
                [
                    { text: 'Добавити адресу', callback_data: 'orders' },
                    { text: 'Список адрес', callback_data: 'orders' }
                ],
                [
                    { text: 'Головне меню', callback_data: 'feedback' },
                ],
            ]
        }
    })

}
import { AppContext } from './../config';
import { Address } from './../models/address';


/**
 * Address Add
 */
export const addAddressStep1 = async (ctx: AppContext) => {
    await ctx.answerCbQuery();

    await ctx.reply(ctx.i18n.t('textCityFormAddress'));
    ctx.session.action = 'addAddressStep2';

    ctx.session.address = { userId: ctx.from?.id };
}

export const addAddressStep2 = async (ctx: AppContext, text: string) => {
    ctx.session.address.city = text;

    await ctx.reply(ctx.i18n.t('textStreetFormAddress'));
    ctx.session.action = 'addAddressStep3';
}

export const addAddressStep3 = async (ctx: AppContext, text: string) => {
    ctx.session.address.street = text;

    const savedAddress = await Address.create(ctx.session.address);

    delete ctx.session.address;
    delete ctx.session.action;

    await ctx.reply(ctx.i18n.t('textAddressAdded'));

    return savedAddress;
}


/**
 * Address List
 */
export const listAddress = async (ctx: AppContext) => {
    await ctx.answerCbQuery();

    const userId = ctx.from?.id;
    const listAddress = await Address.find({ userId });

    if (listAddress.length === 0) {
        await ctx.reply(ctx.i18n.t('textNotFoundAddress'));
    } else {
        const text = listAddress.map(address => `🔹 ${address.city} ${address.street}`).join('\n');

        await ctx.reply(ctx.i18n.t('textListOfAddress') + text, {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: ctx.i18n.t('removeAddress'), callback_data: 'removeAddressList' },
                        { text: ctx.i18n.t('mainMenu'), callback_data: 'mainMenu' },
                    ],
                ]
            }
        });
    }
}


/**
 * Address Remove
 */
export const removeAddressList = async (ctx: AppContext) => {
    await ctx.answerCbQuery();

    const userId = ctx.from?.id;
    const listAddress = await Address.find({ userId });

    const keyboard = listAddress.map(address => {
        return { text: `❌ ${address.city} ${address.street} -`, callback_data: `removeAddress:${address._id}` }
    });

    await ctx.reply(ctx.i18n.t('textRemoveAddressList'), {
        reply_markup: {
            inline_keyboard: [
                keyboard,
            ]
        }
    });
}

export const removeAddress = async (ctx: AppContext) => {
    await ctx.answerCbQuery();

    const addressId = ctx.match[1];

    await Address.deleteOne({ _id: addressId });

    await listAddress(ctx);
}

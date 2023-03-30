"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAddress = exports.removeAddressList = exports.listAddress = exports.addAddressStep3 = exports.addAddressStep2 = exports.addAddressStep1 = void 0;
const address_1 = require("./../models/address");
/**
 * Address Add
 */
const addAddressStep1 = async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply(ctx.i18n.t('textCityFormAddress'));
    ctx.session.action = 'addAddressStep2';
    ctx.session.address = { userId: ctx.from?.id };
};
exports.addAddressStep1 = addAddressStep1;
const addAddressStep2 = async (ctx, text) => {
    ctx.session.address.city = text;
    await ctx.reply(ctx.i18n.t('textStreetFormAddress'));
    ctx.session.action = 'addAddressStep3';
};
exports.addAddressStep2 = addAddressStep2;
const addAddressStep3 = async (ctx, text) => {
    ctx.session.address.street = text;
    const savedAddress = await address_1.Address.create(ctx.session.address);
    delete ctx.session.address;
    delete ctx.session.action;
    await ctx.reply(ctx.i18n.t('textAddressAdded'));
    return savedAddress;
};
exports.addAddressStep3 = addAddressStep3;
/**
 * Address List
 */
const listAddress = async (ctx) => {
    await ctx.answerCbQuery();
    const userId = ctx.from?.id;
    const listAddress = await address_1.Address.find({ userId });
    if (listAddress.length === 0) {
        await ctx.reply(ctx.i18n.t('textNotFoundAddress'));
    }
    else {
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
};
exports.listAddress = listAddress;
/**
 * Address Remove
 */
const removeAddressList = async (ctx) => {
    await ctx.answerCbQuery();
    const userId = ctx.from?.id;
    const listAddress = await address_1.Address.find({ userId });
    const keyboard = listAddress.map(address => {
        return { text: `❌ ${address.city} ${address.street} -`, callback_data: `removeAddress:${address._id}` };
    });
    await ctx.reply(ctx.i18n.t('textRemoveAddressList'), {
        reply_markup: {
            inline_keyboard: [
                keyboard,
            ]
        }
    });
};
exports.removeAddressList = removeAddressList;
const removeAddress = async (ctx) => {
    await ctx.answerCbQuery();
    const addressId = ctx.match[1];
    await address_1.Address.deleteOne({ _id: addressId });
    await (0, exports.listAddress)(ctx);
};
exports.removeAddress = removeAddress;
//# sourceMappingURL=address.js.map
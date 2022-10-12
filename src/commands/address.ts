import { AppContext } from './../config';
import { Address } from './../models/address';


/**
 * Address Add
 */
export const addAddressStep1 = async (ctx: AppContext) => {
    await ctx.answerCbQuery();

    await ctx.reply(ctx.locale.textCityFormAddress);
    ctx.session.action = 'addAddressStep2';

    ctx.session.address = { userId: ctx.from?.id };
}

export const addAddressStep2 = async (ctx: AppContext, text:string) => {
    ctx.session.address.city = text;

    await ctx.reply(ctx.locale.textStreetFormAddress);
    ctx.session.action = 'addAddressStep3';
}

export const addAddressStep3 = async(ctx: AppContext, text:string) => {

    ctx.session.address.street = text;

    await Address.insertMany(ctx.session.address);
    delete ctx.session.address;
    delete ctx.session.action;

    await ctx.reply(ctx.locale.textAddressAdded);
}


/**
 * Address List
 */
export const listAddress = async (ctx: AppContext) => {
    await ctx.answerCbQuery();

    const listAddress = await Address.find({userId: ctx.from?.id});

    if (listAddress && !listAddress.length) {
        await ctx.reply(ctx.locale.textNotFoundAddress);
    } else {
        let text = listAddress.map((address) => `🔹 ${address.city} ${address.street}`).join('\n');
        await ctx.reply(ctx.locale.textListOfAddress + text, {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: ctx.locale.removeAddress, callback_data: 'removeAddressList' },
                        { text: ctx.locale.mainMenu, callback_data: 'mainMenu' },
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

    const listAddress = await Address.find({userId: ctx.from?.id});

    let keyboard = listAddress.map((address) => {
        return { text: `❌ ${address.city} ${address.street} -`, callback_data: `removeAddress:${address._id}` }
    });

    await ctx.reply(ctx.locale.textRemoveAddressList, {
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

    await Address.deleteOne({_id:addressId});

    await listAddress(ctx);
}
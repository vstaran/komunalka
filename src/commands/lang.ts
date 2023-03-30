import { AppContext } from './../config';

export const lang = async (ctx: AppContext) => {

    let locale = 'en';
    if (ctx.message && 'text' in ctx.message) {
        locale = ctx.message.text.split(' ')[1];
    }

    console.log(locale);
    ctx.i18n.locale(locale);

    await ctx.replyWithHTML(`Set to ${ctx.session.lang}` );
}

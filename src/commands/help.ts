import { AppContext } from './../config';

export const help = async (ctx: AppContext) => {
    await ctx.replyWithHTML(ctx.i18n.t('textHelp'));
}

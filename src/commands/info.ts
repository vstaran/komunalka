import { AppContext } from './../config';

export const info = async (ctx: AppContext) => {

    console.log(ctx.from);
    await ctx.replyWithHTML(`${ctx.from?.id} ${ctx.from?.is_bot} ${ctx.from?.language_code} ${ctx.from?.first_name} ${ctx.from?.last_name} ${ctx.from?.username}` );

    // ctx.replyWithHTML(
    //     '<b>Coke</b> or <i>Pepsi?</i>',
    //     Markup.keyboard(['Coke', 'Pepsi'])
    // )

}

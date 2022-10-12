import { AppContext } from './../config';

export const appLang = async (ctx:AppContext, next:any) => {
    const locale: string = ctx.message?.from.language_code ?? "en";
    ctx.session.lang ??= locale;
    ctx.locale = await import(`../locales/${ctx.session.lang}.json`);

    return next();
}
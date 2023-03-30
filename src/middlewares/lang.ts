import { AppContext } from './../config';

export const appLang = async (ctx:AppContext) => {

    const locale: string = ctx.message?.from.language_code ?? "en";
    ctx.session.lang ??= locale;
    ctx.i18n.locale(locale);
    
    //ctx.locale = await import(`../locales/${ctx.session.lang}.json`);

    //return next();
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appLang = void 0;
const appLang = async (ctx) => {
    const locale = ctx.message?.from.language_code ?? "en";
    ctx.session.lang ??= locale;
    ctx.i18n.locale(locale);
    //ctx.locale = await import(`../locales/${ctx.session.lang}.json`);
    //return next();
};
exports.appLang = appLang;
//# sourceMappingURL=lang.js.map
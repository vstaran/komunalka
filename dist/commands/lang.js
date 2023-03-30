"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lang = void 0;
const lang = async (ctx) => {
    let locale = 'en';
    if (ctx.message && 'text' in ctx.message) {
        locale = ctx.message.text.split(' ')[1];
    }
    console.log(locale);
    ctx.i18n.locale(locale);
    await ctx.replyWithHTML(`Set to ${ctx.session.lang}`);
};
exports.lang = lang;
//# sourceMappingURL=lang.js.map
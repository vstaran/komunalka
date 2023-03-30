"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = void 0;
const help = async (ctx) => {
    await ctx.replyWithHTML(ctx.i18n.t('textHelp'));
};
exports.help = help;
//# sourceMappingURL=help.js.map
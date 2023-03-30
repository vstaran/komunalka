"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uptime = void 0;
const moment_1 = __importDefault(require("moment"));
const startTime = (0, moment_1.default)();
const uptime = async (ctx) => {
    startTime.locale(ctx.session.lang);
    await ctx.reply(ctx.i18n.t('textUptime') + ` ${startTime.from((0, moment_1.default)(), true)}`);
};
exports.uptime = uptime;
//# sourceMappingURL=uptime.js.map
import { AppContext } from './../config';
import moment from 'moment';

const startTime = moment();

export const uptime = async (ctx: AppContext) => {
    startTime.locale(ctx.session.lang);
    await ctx.reply(ctx.i18n.t('textUptime') + ` ${startTime.from(moment(), true)}`);
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appSession = void 0;
const telegraf_session_mongoose_1 = require("telegraf-session-mongoose");
const config_1 = require("./../config");
exports.appSession = (0, telegraf_session_mongoose_1.session)({ sessionName: 'session', collectionName: config_1.sessionCollectionName });
//# sourceMappingURL=session.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Indicator = void 0;
const mongoose_1 = require("mongoose");
const indicatorSchema = new mongoose_1.Schema({
    street: {
        type: String,
        trim: true,
        required: true
    },
    city: {
        type: String,
        trim: true,
        required: true
    },
    addressId: {
        type: Number,
        required: true
    }
});
exports.Indicator = (0, mongoose_1.model)('Indicator', indicatorSchema);
// module.exports = mongoose.models.Customer || mongoose.model('Customer', customerSchema);
//# sourceMappingURL=indicator.js.map
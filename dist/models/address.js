"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const mongoose_1 = require("mongoose");
const addressSchema = new mongoose_1.Schema({
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
    userId: {
        type: Number,
        required: true
    }
});
exports.Address = (0, mongoose_1.model)('Address', addressSchema);
// module.exports = mongoose.models.Customer || mongoose.model('Customer', customerSchema);
//# sourceMappingURL=address.js.map
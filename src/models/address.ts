import {Schema, model} from 'mongoose';

interface IAddress {
    userId: { type: Number },
    street?: { type: String },
    city?: { type: String }
}

const addressSchema = new Schema<IAddress>({
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
})

export const Address = model<IAddress>('Address', addressSchema);
// module.exports = mongoose.models.Customer || mongoose.model('Customer', customerSchema);
import {Schema, model} from 'mongoose';

interface IIndicator {
    addressId: { type: Number },
    street?: { type: String },
    city?: { type: String }
}

const indicatorSchema = new Schema<IIndicator>({
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
})

export const Indicator = model<IIndicator>('Indicator', indicatorSchema);
// module.exports = mongoose.models.Customer || mongoose.model('Customer', customerSchema);
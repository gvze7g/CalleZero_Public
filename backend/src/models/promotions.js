import { Schema, model } from "mongoose";

const PromotionsSchema = new Schema({
    name: {type: String},
    type: {type: String},
    value: {type: Number},
    startDate: {type: Date},
    endDate: {type: Date},
    active: {type: Boolean},
    appliesTo: {type: String}
}, {
    timestamps: true,
    strict: false
})
export default model("Promotions", PromotionsSchema);

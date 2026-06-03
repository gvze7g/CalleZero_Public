import { Schema, model } from "mongoose";

const AdministratorSchema = new Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    isActive: { type: Boolean },
    isVerified: {type: Boolean},
    loginAttemps: {type: Number},
    createdAt: {type: Date},
    timeOut: {type: Date}
}, {
    timestamps: true,
    strict: false
})

export default model("Administrator", AdministratorSchema)
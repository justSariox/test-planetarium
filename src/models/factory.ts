import mongoose from "mongoose";
import {IFactory} from "@/models/types";

const {Schema} = mongoose

const factorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    prefix: {
        type: String,
    },
    ipAddress: {
        type: String,
    }
}, {timestamps: true})

export default mongoose.models.Factory || mongoose.model<IFactory>('Factory', factorySchema)


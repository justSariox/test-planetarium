import mongoose from "mongoose";

export const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL || '')
    } catch (e) {
        throw new Error('mongodb error')
    }
}


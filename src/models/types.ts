import mongoose from "mongoose";

export interface IFactory extends mongoose.Document {
    name: string;
    prefix: string;
    ipAddress: string
}
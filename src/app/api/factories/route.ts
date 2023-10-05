import { connect } from '@/utils/db'
import Factory from "@/models/factory";
import {NextRequest, NextResponse} from "next/server";

const GET = async (req: NextRequest) => {
    try {
        await connect()
        const factories = await Factory.find()

        return new NextResponse(JSON.stringify(factories), { status: 200 });
    } catch (e) {
        return new NextResponse('Something went wrong', { status: 500 }) as NextResponse;
    }
}

const POST = async (req: NextRequest) => {
    const body = await req.json()
    const newFactory = new Factory(body)

    try {
        await connect();
        await newFactory.save();
        return new NextResponse(`Created factory `, { status: 201 }) as NextResponse;
    } catch (e) {
        return new NextResponse('Something went wrong', { status: 500 }) as NextResponse;
    }
}

export { GET, POST }
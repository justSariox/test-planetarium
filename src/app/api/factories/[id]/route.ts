import { connect } from '@/utils/db'

import {NextRequest, NextResponse} from "next/server";
import Factory from "@/models/factory";

type RouteParams = {
    id: string;
};


const GET = async (req: NextRequest, { params }: { params: RouteParams }): Promise<NextResponse> => {
    const { id } = params;
    try {
        await connect()
        const factory = await Factory.findById(id);

        return new NextResponse(JSON.stringify(factory), { status: 200 }) as NextResponse;
    } catch (e) {
        return new NextResponse('Something went wrong', { status: 500 }) as NextResponse;
    }
}

const DELETE = async (req: NextRequest, { params }: { params: RouteParams }): Promise<NextResponse> => {
    const { id } = params;
    try {
        await connect()
        await Factory.findByIdAndDelete(id);
        return new NextResponse('Post deleted', { status: 200 });
    } catch (e) {
        return new NextResponse('Something went wrong', { status: 500 });
    }
}
const PATCH = async (req: NextRequest, { params }: { params: RouteParams }): Promise<NextResponse> => {
    const { id } = params;
    const {name, prefix, ipAddress} = await req.json()
    try {
        await connect()
        await Factory.findByIdAndUpdate(
            id,
            {
                name,
                prefix,
                ipAddress,
            },
            { new: true } // чтобы получить обновленный документ
        );
        console.log()
        return new NextResponse('updated', { status: 200 });
    } catch (e) {
        return new NextResponse('Something went wrong', { status: 500 });
    }
};

export {GET, PATCH, DELETE}
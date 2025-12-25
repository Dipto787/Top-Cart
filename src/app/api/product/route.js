import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";


export const POST = async (req) => {
    const body = await req.json();
    console.log(body)
    // let isExist=body
    const cartCollection = dbConnect(collectionNameObj.cartsCollection);
    const result = await cartCollection.insertOne(body);
    return NextResponse.json({ result })
};
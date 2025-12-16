import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect"
import { NextResponse } from "next/server";


export const GET = async (req) => {
    // let sess
    const productCollection = dbConnect(collectionNameObj.productCollection);
    const result = await productCollection.find({}).toArray();
    return NextResponse.json(result);

}
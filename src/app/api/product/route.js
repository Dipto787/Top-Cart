import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect"
import { NextResponse } from "next/server";


export const GET = async (req) => {
    const productCollection = dbConnect(collectionNameObj.productCollection);
    const { searchParams } = new URL(req.url);
    let category = searchParams.get('category');
    if (category) {
        const result = await productCollection.find({ category: category }).toArray();
        return NextResponse.json(result);
    }

    const result = await productCollection.find({}).toArray();
    return NextResponse.json(result);

}
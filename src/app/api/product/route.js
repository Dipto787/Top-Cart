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

 

export const GET = async (req) => { 
        const { searchParams } = new URL(req.url);
        const category = searchParams.get("category");

        const productCollection =  dbConnect(collectionNameObj.productCollection);

        const query = category ? { category } : {};

        const result = await productCollection.find(query).toArray();

        return NextResponse.json(result);

    
};



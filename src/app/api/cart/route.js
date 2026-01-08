import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');
    console.log('rafdee;',email)
    let cartCollection = dbConnect(collectionNameObj.cartsCollection);
    const data = await cartCollection.find({ customer_email: email }).toArray();
    return NextResponse.json(data);

}

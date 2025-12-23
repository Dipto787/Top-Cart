import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server"; 

export async function GET(req, { params }) {
    let p = await params; 
    console.log('jfljfjdlkf',p)
    let productDetails = dbConnect(collectionNameObj.productCollection);
    const data = await productDetails.findOne({ _id: new ObjectId(p?.id) });
    return NextResponse.json(data);
  
}

import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";


export const POST = async (req) => {
    const body = await req.json();
    console.log(body)
    let { customer_email, quantity, product_price, product_name } = body;
    console.log(customer_email, quantity, product_price, product_name)
    const cartCollection = dbConnect(collectionNameObj.cartsCollection);
    let isExist = await cartCollection.findOne({ customer_email: customer_email, product_name: product_name });
    if (isExist) {
        let filter = { _id: new ObjectId(isExist._id) };
        let updatedDoc = {
            $set: {
                quantity: quantity + isExist.quantity,
                product_price: product_price + isExist.product_price
            }
        };

        const result = await cartCollection.updateOne(filter, updatedDoc);
        return NextResponse.json({ result });
    }

    const result = await cartCollection.insertOne(body);
    return NextResponse.json({ result })
};



export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    const productCollection = dbConnect(collectionNameObj.productCollection);

    const query = category ? { category } : {};

    const result = await productCollection.find(query).toArray();

    return NextResponse.json(result);


};



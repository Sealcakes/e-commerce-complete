import dbConnect from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";
import { Product } from "@/app/models/products";



export async function GET() {
  
  await dbConnect();

  let product;
  try {
    product = await Product.find({}).limit(20);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred'}, { status: 500 });
  }

  if (!product) {
    return NextResponse.json({ product: null }, { status: 404 });
  }

  return NextResponse.json({ product })
}

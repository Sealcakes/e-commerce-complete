import dbConnect from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";
import { Product } from "@/app/models/products";



export async function GET() {
  
  await dbConnect();

  let products;
  try {
    products = await Product.find({}).limit(20);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'An error occurred'}, { status: 500 });
  }

  if (!products || products.length === 0) {
    return NextResponse.json([], { status: 404 });
  }

  return NextResponse.json(products);
}

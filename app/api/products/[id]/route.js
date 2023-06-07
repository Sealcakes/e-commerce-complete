import dbConnect from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";
import { Product } from "@/app/models/products";



export async function GET(request, { params }) {
  
  await dbConnect();
  
  
  const id = params.id.split('_').slice(-1)[0];
  console.log(id)

  let product;
  try {
    product = await Product.findById(id, "Title Description")
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred'}, { status: 500 });
  }

  if (!product) {
    return NextResponse.json({ product: null }, { status: 404 });
  }


  return NextResponse.json({ product })
}

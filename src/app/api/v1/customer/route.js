import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json({}, { status: 200 });
}

export async function POST(req) {
  const { name, identityNo, phoneNumber } = await req.json();

  try {
    const createCustomer = await prisma.customer.create({
      data: {
        name,
        identityNo,
        phoneNumber,
      },
    });
    return NextResponse.json({ createCustomer }, { status: 201 });
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
}

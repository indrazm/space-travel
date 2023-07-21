import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const ticketNumber = searchParams.get("ticketNumber");
    const tripId = searchParams.get("tripId");

    let ticket;
    if (ticketNumber) {
      ticket = await prisma.ticket.findFirst({
        where: {
          ticketNumber,
        },
      });
    } else if (tripId) {
      ticket = await prisma.ticket.findFirst({
        where: {
          tripId,
          order: null,
        },
        include: {
          trip: true,
        },
      });
    } else {
      ticket = await prisma.ticket.findMany({});
    }

    return NextResponse.json({ ticket }, { status: 200 });
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
}

export async function POST(req) {
  return NextResponse.json({}, { status: 200 });
}

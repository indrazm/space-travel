import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const tripId = searchParams.get("tripId");

    let tripData;
    if (tripId) {
      tripData = await prisma.trip.findFirst({
        where: {
          id: tripId,
        },
      });
    } else {
      tripData = await prisma.trip.findMany({
        include: {
          ticket: true,
          order: true,
        },
      });
    }

    return NextResponse.json({ tripData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
}

export async function POST(req) {
  const { destination, date, tickets } = await req.json();

  try {
    const createTrip = await prisma.trip.create({
      data: {
        destination,
        date,
        ticket: {
          create: tickets,
        },
      },
    });
    return NextResponse.json({ createTrip }, { status: 201 });
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
}

import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
   try {
      const { searchParams } = new URL(req.url);
      const ticketId = searchParams.get("ticketId");

      let orderData;
      if (ticketId) {
         orderData = await prisma.order.findFirst({
            where: {
               ticket: {
                  ticketNumber: ticketId,
               },
            },
            include: {
               customer: true,
               ticket: true,
               trip: true,
            },
         });
      } else {
         orderData = await prisma.order.findMany({});
      }

      return NextResponse.json({ orderData }, { status: 200 });
   } catch (error) {
      return NextResponse.json({}, { status: 500 });
   }
}

export async function POST(req) {
   const { name, identityNumber, phoneNumber, ticketId, tripId } = await req.json();
   try {
      const createOrder = await prisma.customer.create({
         data: {
            name,
            identityNumber,
            phoneNumber,
            order: {
               create: {
                  ticketId,
                  tripId,
               },
            },
         },
      });

      return NextResponse.json({ createOrder }, { status: 201 });
   } catch (error) {
      console.log(error);
      return NextResponse.json({ error, message: error.message }, { status: 500 });
   }
}

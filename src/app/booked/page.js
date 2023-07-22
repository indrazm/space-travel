import { Ticket } from "@/components/Ticket";
import { API_URL } from "@/utils/apiUrl";
import Link from "next/link";

async function getOrderedTicket(ticketId) {
   const res = await fetch(`${API_URL}/api/v1/order?ticketId=${ticketId}`, {
      cache: "no-store",
   });
   const data = await res.json();
   return data;
}

export default async function Page({ searchParams }) {
   const { ticketId } = searchParams;
   const { orderData } = await getOrderedTicket(ticketId);

   return (
      <div className="h-screen bg-moon bg-cover ">
         <div className="bg-black/80 h-screen flex justify-center items-center">
            <div className="w-[500px] h-[300px] ">
               {orderData ? (
                  <div className="space-y-4">
                     <Ticket
                        isBooked={true}
                        name={orderData.customer.name}
                        identityNumber={orderData.customer.identityNumber}
                        ticketNumber={orderData.ticket.ticketNumber}
                        destination={orderData.trip.destination}
                        date={orderData.trip.date}
                     />
                  </div>
               ) : (
                  <div className="text-center">
                     <h1>404</h1>
                     <h3>Order Not Found</h3>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}

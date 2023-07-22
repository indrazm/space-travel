"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Ticket } from "./Ticket";

export const BuyTicket = ({ tripId, ticket }) => {
   const router = useRouter();
   const params = useSearchParams();
   const destination = params.get("tripId");

   const [loading, setLoading] = useState(false);
   const [userData, setUserData] = useState({
      name: "",
      identityNumber: "",
      phoneNumber: "",
   });

   const handleChangeInput = (e) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
   };

   const handleCreateOrder = async () => {
      setLoading(true);
      const { name, identityNumber, phoneNumber } = userData;
      const res = await fetch(`api/v1/order`, {
         method: "POST",
         body: JSON.stringify({
            ticketId: ticket.id,
            name,
            identityNumber,
            phoneNumber,
            tripId,
         }),
      });
      const { createOrder } = await res.json();
      if (createOrder) {
         router.push(`/booked?ticketId=${ticket.ticketNumber}`);
         setLoading(false);
      }
   };

   useEffect(() => {
      if (!destination) router.push("/");
   }, [destination]);

   return (
      <main className="min-h-screen bg-moon bg-cover">
         <div className="bg-black/80 min-h-screen p-16 space-y-12 flex flex-col justify-between">
            <section className="flex flex-col lg:flex-row justify-between gap-4">
               <div className="space-y-4 border-b-1 pb-4 border-zinc-600">
                  <h1 className="w-full lg:w-[560px] font-semibold uppercase">{ticket.trip.destination}</h1>
                  <p>See the earth from beautiful {ticket.trip.destination}</p>
               </div>
               <div className="text-left lg:text-right">
                  <p>project by.</p>
                  <p className="font-bold text-white">AEROSPACE TRAVELERS</p>
               </div>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               <div className="space-y-3 order-1 lg:order-last">
                  <h3>Identity</h3>
                  <p>Please fill your identity below to buy ticket</p>
                  <input disabled={loading} name="name" placeholder="Full name" onChange={handleChangeInput} />
                  <input disabled={loading} name="identityNumber" placeholder="Identity no." onChange={handleChangeInput} />
                  <input disabled={loading} name="phoneNumber" placeholder="Phone no." onChange={handleChangeInput} />
                  <button disabled={loading} onClick={handleCreateOrder}>
                     {loading ? "Loading..." : "Buy Ticket"}
                  </button>
               </div>
               <Ticket
                  isBooked={false}
                  name={userData.name}
                  identityNumber={userData.identityNumber}
                  ticketNumber={ticket.ticketNumber}
                  destination={ticket.trip.destination}
                  date={ticket.trip.date}
               />
            </section>
         </div>
      </main>
   );
};

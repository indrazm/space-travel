"use client";

import { TripCard } from "./TripCard";

export const Home = ({ tripData }) => {
  return (
    <main className="min-h-screen bg-moon bg-cover">
      <div className="bg-black/80 min-h-screen p-16 flex flex-col justify-between space-y-20">
        <section className="flex justify-between">
          <div className="space-y-4 border-b-1 pb-4 border-zinc-600">
            <h1 className="w-[560px] font-semibold uppercase">
              Space to the edge of the life
            </h1>
            <p>Goes in space in minutes with campervan</p>
          </div>
          <div className="text-right">
            <p>project by.</p>
            <p className="font-bold text-white">AEROSPACE TRAVELERS</p>
          </div>
        </section>
        <div className="space-y-8">
          <div className="grid grid-cols-3 gap-10">
            {tripData.map((item) => {
              const isSoldOut = item.ticket.length === item.order.length;
              return (
                <TripCard
                  isSoldOut={isSoldOut}
                  key={item.id}
                  url={`/join-trip?tripId=${item.id}`}
                  destination={item.destination}
                  date={item.date}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

"use client";

import React, { useState } from "react";
import Randomstring from "randomstring";
import { useRouter } from "next/navigation";

export const CreateTrip = () => {
  const router = useRouter();
  const [tripData, setTripData] = useState({
    destination: "Moon",
    date: "",
    totalTickets: 4,
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setTripData({ ...tripData, [name]: value });
  };

  const handleCreateTrip = async () => {
    const { destination, date } = tripData;
    const totalTickets = Number(tripData.totalTickets);
    let ticketRows = [];

    //Create Ticket Rows
    for (let i = 0; i < totalTickets; i++) {
      const ticketNumber = Randomstring.generate(5).toUpperCase();
      ticketRows.push({ ticketNumber });
    }

    //Insert to Database
    const res = await fetch("/api/v1/trip", {
      method: "POST",
      body: JSON.stringify({
        destination,
        date,
        tickets: ticketRows,
      }),
    });
    const data = await res.json();
    if (data) {
      router.push("/");
    }
  };

  return (
    <main className="h-screen bg-moon bg-cover">
      <div className="bg-black/80 h-screen p-16 space-y-12 flex flex-col justify-between">
        <section className="flex justify-between">
          <div className="space-y-4 border-b-1 pb-4 border-zinc-600">
            <h1 className="w-[560px] font-semibold uppercase">Create Trip</h1>
          </div>
          <div className="text-right">
            <p>project by.</p>
            <p className="font-bold text-white">AEROSPACE TRAVELERS</p>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-12">
          <div className="space-y-3">
            <h3>Trip Information</h3>
            <select name="destination" onChange={handleChangeInput}>
              <option>Moon</option>
              <option>Mars</option>
              <option>Blue Planet</option>
            </select>
            <input name="date" type="date" onChange={handleChangeInput} />
            <input
              name="totalTickets"
              type="number"
              value={tripData.totalTickets}
              onChange={handleChangeInput}
            />
            <button onClick={handleCreateTrip}>Create Trip</button>
          </div>
        </section>
      </div>
    </main>
  );
};

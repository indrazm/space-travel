"use client";

import Barcode from "react-barcode";

export const Ticket = ({
  isBooked,
  name,
  identityNumber,
  ticketNumber,
  destination,
  date,
}) => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 rounded-xl p-8 flex flex-col justify-between h-full">
      <div className="flex justify-between">
        <div className="space-y-12">
          <div>
            <h3>{isBooked ? "BOOKED" : "UNBOOKED"}</h3>
            <p>This ticket is available</p>
          </div>
          <div className="text-zinc-300">
            <div>{name}</div>
            <div className="text-xs font-bold tracking-widest text-zinc-100">
              {identityNumber}
            </div>
          </div>
        </div>
        <Barcode
          displayValue={true}
          width={1}
          height={50}
          value={ticketNumber}
        />
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-light">Destination</p>
          <h3>{destination}</h3>
        </div>
        <div>
          <p className="text-sm font-light">Launch date</p>
          <p className="text-white">{date}</p>
        </div>
      </div>
    </div>
  );
};

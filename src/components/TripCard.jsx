"use client";

import Image from "next/image";
import Link from "next/link";
import Image1 from "../../public/assets/img/1.png";
import Image2 from "../../public/assets/img/3.png";
import Image3 from "../../public/assets/img/5.png";

export const TripCard = ({ isSoldOut, destination, date, url }) => {
  if (isSoldOut) {
    return (
      <div className="relative w-full h-[320px]">
        {destination === "Moon" && (
          <Image
            src={Image1}
            alt="Image"
            fill
            className="object-cover grayscale rounded-xl cursor-pointer border-2 border-black/10 hover:border-zinc-500 hover:shadow-2xl hover:shadow-slate-400/20 transition duration-300 ease-in-out"
          />
        )}
        {destination === "Mars" && (
          <Image
            src={Image2}
            alt="Image"
            fill
            className="object-cover grayscale rounded-xl cursor-pointer border-2 border-black/10 hover:border-zinc-500 hover:shadow-2xl hover:shadow-slate-400/20 transition duration-300 ease-in-out"
          />
        )}
        {destination === "Blue Planet" && (
          <Image
            src={Image3}
            alt="Image"
            fill
            className="object-cover grayscale rounded-xl cursor-pointer border-2 border-black/10 hover:border-zinc-500 hover:shadow-2xl hover:shadow-slate-400/20 transition duration-300 ease-in-out"
          />
        )}
        <div className="bg-rose-100 text-rose-500 absolute top-4 right-4 z-10 text-xs font-bold px-2 py-1 rounded-full">
          SOLD OUT
        </div>
        <div className="absolute w-full flex items-center border-2 border-t-0 border-black/30 bg-black/10 backdrop-blur-xl rounded-b-xl p-3 justify-between bottom-0">
          <h3 className="text-lg">{destination}</h3>
          <p className="text-sm">SOLD OUT</p>
        </div>
      </div>
    );
  }

  return (
    <Link href={url} className="block">
      <div className="relative w-full h-[320px]">
        {destination === "Moon" && (
          <Image
            src={Image1}
            alt="Image"
            fill
            className="object-cover rounded-xl cursor-pointer border-2 border-black/10 hover:border-zinc-500 hover:shadow-2xl hover:shadow-slate-400/20 transition duration-300 ease-in-out"
          />
        )}
        {destination === "Mars" && (
          <Image
            src={Image2}
            alt="Image"
            fill
            className="object-cover rounded-xl cursor-pointer border-2 border-black/10 hover:border-zinc-500 hover:shadow-2xl hover:shadow-slate-400/20 transition duration-300 ease-in-out"
          />
        )}
        {destination === "Blue Planet" && (
          <Image
            src={Image3}
            alt="Image"
            fill
            className="object-cover rounded-xl cursor-pointer border-2 border-black/10 hover:border-zinc-500 hover:shadow-2xl hover:shadow-slate-400/20 transition duration-300 ease-in-out"
          />
        )}
        <div className="absolute w-full flex items-center border-2 border-t-0 border-black/30 bg-black/10 backdrop-blur-xl rounded-b-xl p-3 justify-between bottom-0">
          <h3 className="text-lg">{destination}</h3>
          <p className="text-sm">{date}</p>
        </div>
      </div>
    </Link>
  );
};

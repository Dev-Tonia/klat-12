"use client";

import clsx from "clsx";
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "Wallet Transfer",
    username: "@amalisa.lumes",
    amount: "₦5,000",
    time: "12:45 PM",
    avatar: "/imgs/avatar-1.png",
  },
  {
    id: 2,
    title: "Payment Received",
    username: "@dapo_k",
    amount: "₦13,000",
    time: "10:22 AM",
    avatar: "/imgs/avatar-2.png",
  },
  {
    id: 3,
    title: "Market Purchase",
    username: "Supermart",
    amount: "₦4,500",
    time: "09:45 AM",
    avatar: "/imgs/avatar-3.jpg",
  },
];

export default function CardStack() {
  return (
    <div className="relative flex flex-col items-center mt-10">
      {cards.map((card, index) => {
        const scale = 1 - index * 0.1; // shrink each card a bit
        const translateY = index * 40; // push down each card

        return (
          <div
            key={card.id}
            className={clsx(
              "absolute w-full max-w-sm px-4 py-3 rounded-xl bg-white flex items-center transition-all duration-500 ease-in-out",
              index !== cards.length - 1 &&
                "shadow-[0px_14.74px_14.74px_0px_#0000001A]"
            )}
            style={{
              transform: `translateY(${translateY}px) scale(${scale})`,
              zIndex: cards.length - index,
            }}
          >
            <Image
              src={card.avatar}
              alt={card.username}
              width={44}
              height={44}
              className="rounded-full mr-3"
            />
            <div className="">
              <p className=" font-goodly font-medium leading-tight">
                {card.title}
              </p>

              <small className="text-sm font-dm-sans leading-5.5 tracking-tight text-gray-500">
                {card.username}
              </small>
            </div>
            <div className="text-right ml-auto">
              <p className="text-sm font-semibold text-primary font-goodly">
                {card.amount}
              </p>
              <small className="text-[11px] text-gray-500">{card.time}</small>
            </div>
          </div>
        );
      })}
    </div>
  );
}

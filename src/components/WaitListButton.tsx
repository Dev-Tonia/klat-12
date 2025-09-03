import React from "react";

export default function WaitListButton({ className }: { className?: string }) {
  return (
    <button
      className={`bg-primary text-white text-sm min-[900px]:text-base font-semibold rounded-full font-inter py-3 px-6 w-fit md:w-auto ${className}`}
    >
      Join waitlist
    </button>
  );
}

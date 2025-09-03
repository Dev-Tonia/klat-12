import React from "react";

export default function WaitListButton({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={`bg-primary text-white text-sm min-[900px]:text-base font-semibold rounded-full font-inter py-3 px-6 w-fit md:w-auto ${className}`}
      onClick={onClick}
    >
      Join waitlist
    </button>
  );
}

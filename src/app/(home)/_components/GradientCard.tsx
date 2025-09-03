import clsx from "clsx";
import React from "react";

export default function GradientCard({
  children,
  className = "bg-[linear-gradient(179.54deg,#779BC1_-3.44%,#9ABFDA_45.36%,#CBDFEC_94.16%)]",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        " rounded-[1.25rem] pt-7  px-5 md:px-7 lg:px-8.5",
        className
      )}
    >
      {children}
    </div>
  );
}

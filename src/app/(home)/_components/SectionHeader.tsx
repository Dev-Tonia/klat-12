import clsx from "clsx";
import React from "react";

export default function SectionHeader({
  title,
  desc,
  className = "max-w-xl",
}: {
  title: string;
  desc: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        " tracking-tighter text-primary  mx-auto flex flex-col gap-5 text-center ",
        className
      )}
    >
      <h2 className=" font-goodly font-semibold text-6xl leading-16">
        {title}
      </h2>
      <p className=" font-dm-sans text-xl px-9 ">{desc}</p>
    </div>
  );
}

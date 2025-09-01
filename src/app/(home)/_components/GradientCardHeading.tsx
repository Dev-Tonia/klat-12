import clsx from "clsx";
import React from "react";
import Image, { StaticImageData } from "next/image";

type GradientCardData = {
  icon?: string | StaticImageData;
  title?: string;
  desc?: string;
};

type GradientCardHeadingProps = {
  data?: GradientCardData;
  titleClass?: string;
};

export default function GradientCardHeading({
  data,
  titleClass,
}: GradientCardHeadingProps) {
  return (
    <div className="mb-7">
      {/* icon */}
      {data?.icon && (
        <div className="size-15 bg-gray-50 rounded-full flex justify-center items-center">
          <div className="relative size-6">
            <Image fill src={data.icon} alt="app store" />
          </div>
        </div>
      )}

      {/* card title */}
      <div className="text-white pt-5">
        <h3
          className={clsx(
            "font-goodly font-semibold text-[2.5rem] leading-11 tracking-tight mb-5",
            titleClass
          )}
        >
          {data?.title}
        </h3>
        <p className="font-dm-sans text-xl tracking-tight">{data?.desc}</p>
      </div>
    </div>
  );
}

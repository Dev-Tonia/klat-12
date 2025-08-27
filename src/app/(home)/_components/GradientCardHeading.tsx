import clsx from "clsx";
import React from "react";

export default function GradientCardHeading({
  data,
  titleClass,
}: {
  data?: any;
  titleClass?: string;
}) {
  return (
    <div className=" mb-7">
      {/* icon  */}
      {data?.icon && (
        <div className=" size-15 bg-gray-50 rounded-full flex justify-center items-center ">
          <img src={data.icon} alt="app store" />
        </div>
      )}
      {/* card title */}
      <div className=" text-white pt-5">
        <h3
          className={clsx(
            " font-goodly font-semibold text-[2.5rem] leading-11 tracking-tight mb-5 ",
            titleClass
          )}
        >
          {data.title}
        </h3>
        <p className=" font-dm-sans text-xl tracking-tight">{data.desc}</p>
      </div>
    </div>
  );
}

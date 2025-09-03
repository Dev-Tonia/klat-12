import React from "react";
import Image from "next/image";

import clsx from "clsx";
export default function DownloadAppBtn({ className }: { className?: string }) {
  return (
    <button
      className={clsx(
        "bg-primary text-white flex items-center gap-2 px-9 py-4.5 rounded-full ",
        className
      )}
    >
      <span className=" font-medium font-dm-sans"> Download Klat-32</span>
      <div className=" relative size-6">
        <Image fill src="/icon/appstore.svg" alt="app store" />
      </div>
      <div className=" relative size-6">
        <Image fill src="/icon/playstore.svg" alt="play store" />
      </div>
    </button>
  );
}

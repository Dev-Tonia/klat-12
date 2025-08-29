import React from "react";
import { Search } from "lucide-react";
import clsx from "clsx";

export default function MobileFrame({
  children,
  cardHeight = "h-85",
  cardWidth = " max-w-100",
}: {
  children: React.ReactNode;
  cardHeight?: string;
  cardWidth?: string;
}) {
  return (
    <div
      className={clsx(
        " w-full border-[10px] border-b-0 relative bg-white border-white rounded-t-[2.5rem] overflow-hidden",
        cardHeight,
        cardWidth
      )}
    >
      <img
        src="/imgs/mobile-frame-bg.png"
        alt="phone"
        className=" absolute w-full inset-0 h-60 object-cover "
      />
      <div className=" relative z-10   px-3 pt-3">
        {/* status bar */}
        <div className="  w-full flex justify-between items-center text-white text-sm font-dm-sans">
          <span className=" text-black font-bold block px-1">9:41</span>
          <span className=" flex items-center gap-1">
            <img src="/icon/signal.svg" alt="signal" />
            <img src="/icon/wifi.svg" alt="wifi" />
            <img src="/icon/battery.svg" alt="battery" />
          </span>
        </div>
        {/* content area */}
        <div className=" mt-4.5">{children}</div>
      </div>
    </div>
  );
}

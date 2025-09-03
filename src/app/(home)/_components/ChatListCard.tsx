import clsx from "clsx";
import React from "react";
import Image from "next/image";

interface ChatListItemProps {
  avatar: string;
  name?: string;
  time?: string;
  message?: string;
  subMessage?: string;
  avatarClassName?: string;
  nameClassName?: string;
  timeClassName?: string;
}
export default function ChatListCard({
  avatar,
  name,
  time,
  message,
  subMessage,
  avatarClassName = " size-7 sm:size-8 md:size-9 lg:size-10",
  nameClassName = "",
  timeClassName = "text-sm ",
}: ChatListItemProps) {
  return (
    <>
      <div className=" flex  gap-2.5 ">
        <div
          className={clsx(
            "  rounded-full overflow-hidden relative",
            avatarClassName
          )}
        >
          <Image
            fill
            src={avatar}
            alt="profile"
            className=" w-full h-full object-cover"
          />
        </div>
        <div
          className={clsx(
            "text-ink-darkest flex-1 leading-3.5 ",
            nameClassName
          )}
        >
          <div className=" flex justify-between items-center">
            <p className=" text-[10px] sm:text-xs md:text-sm lg:text-base">
              {name}
            </p>
            <span
              className={clsx(
                " text-[10px] sm:text-xs lg:text-sm ",
                timeClassName
              )}
            >
              {time}
            </span>
          </div>
          <p className=" text-[10px] sm:text-xs md:text-sm lg:text-base  font-bold mt-2">
            {message}
          </p>
          {subMessage && (
            <p className=" text-[10px] sm:text-xs md:text-sm lg:text-base text-ink-light leading-4 mt-1">
              {subMessage}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

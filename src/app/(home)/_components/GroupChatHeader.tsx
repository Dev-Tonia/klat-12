"use client";
import Image from "next/image";
import { ArrowLeft, Phone, Save } from "lucide-react";
import clsx from "clsx";

interface GroupChatHeaderProps {
  name: string;
  participants?: number;
  avatarSrc?: string;
  onBack?: () => void;
  onCall?: () => void;
  onSave?: () => void;
  className?: string;
  actionsClassName?: string;
}

export default function GroupChatHeader({
  name,
  participants = 0,
  avatarSrc = "/imgs/avatar-3.jpg",
  onBack,
  onCall,
  onSave,
  className,
  actionsClassName,
}: GroupChatHeaderProps) {
  return (
    <header
      className={clsx(
        "w-full flex items-center justify-between gap-4 px-3 sm:px-4 py-2.5",
        "rounded-2xl bg-gradient-to-b from-sky-100/70 via-white to-white",
        className
      )}
    >
      {/* Left: Back + Avatar + Name */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          type="button"
          aria-label="Go back"
          onClick={onBack}
          className="shrink-0 inline-flex items-center justify-center rounded-full hover:bg-black/5 active:bg-black/10 size-7 sm:size-8 transition"
        >
          <ArrowLeft className="size-4 sm:size-5 text-gray-700" />
        </button>
        <div className="relative size-8 sm:size-9 rounded-full overflow-hidden shrink-0">
          <Image
            src={avatarSrc}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 36px, 40px"
          />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-dm-sans font-semibold text-sm sm:text-base text-gray-900 truncate">
            {name}
          </span>
          <span className="text-[10px] sm:text-xs font-dm-sans text-gray-600 truncate">
            {participants} {participants === 1 ? "participant" : "participants"}
          </span>
        </div>
      </div>

      {/* Right: Actions */}
      <div
        className={clsx("flex items-center gap-2 sm:gap-3", actionsClassName)}
      >
        <button
          type="button"
          onClick={onSave}
          aria-label="Save"
          className="size-8 sm:size-9 rounded-full bg-white/70 backdrop-blur flex items-center justify-center ring-1 ring-gray-200 hover:bg-white shadow-sm transition"
        >
          <Save className="size-4 sm:size-5 text-gray-700" />
        </button>
        <button
          type="button"
          onClick={onCall}
          aria-label="Call"
          className="size-8 sm:size-9 rounded-full bg-white/70 backdrop-blur flex items-center justify-center ring-1 ring-gray-200 hover:bg-white shadow-sm transition"
        >
          <Phone className="size-4 sm:size-5 text-gray-700" />
        </button>
      </div>
    </header>
  );
}

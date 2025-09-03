"use client";
import { Send, ArrowUp, Plus, Eye } from "lucide-react";
import clsx from "clsx";
import React from "react";

interface WalletHeaderProps {
  balance: number;
  currencySymbol?: string;
  onRequestHistory?: () => void;
  onSend?: () => void;
  onRequest?: () => void;
  onAddMoney?: () => void;
  className?: string;
}

function formatMoney(amount: number, currencySymbol: string) {
  // Keep two decimals; use locale grouping
  const parts = amount.toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${currencySymbol}${parts}`;
}

export default function WalletHeader({
  balance,
  currencySymbol = "₦",
  onRequestHistory,
  onSend,
  onRequest,
  onAddMoney,
  className,
}: WalletHeaderProps) {
  return (
    <section className={clsx("relative isolate w-full", className)}>
      {/* Top Row */}
      <div className="flex items-start justify-between gap-4">
        <h1 className=" text-xl md:text-2xl lg:text-3xl font-goodly font-semibold leading-7 md:leading-9 lg:leading-10 tracking-tight text-ink-darkest">
          Wallet
        </h1>

        <button
          type="button"
          onClick={onRequestHistory}
          className={clsx(
            "inline-flex items-center justify-center whitespace-nowrap",
            "rounded-full bg-white/70 backdrop-blur px-4 py-2 leading-5 text-sm font-medium font-dm-sans text-gray-700"
          )}
        >
          Request History
        </button>
      </div>

      {/* Balance meta */}
      <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm font-dm-sans text-gray-700">
        <span>Available Balance</span>
        <Eye
          className="size-3.5 sm:size-4 text-gray-500"
          aria-label="Info"
          role="img"
        />
      </div>

      {/* Balance value */}
      <p className="mt-2 font-goodly font-medium leading-8 md:leading-10 lg:leading-12 text-3xl md:text-4xl lg:text-5xl tracking-tight text-zinc-800">
        {formatMoney(balance, currencySymbol)}
      </p>

      <p className="  text-gray-400 font-dm-sans text-sm leading-4.5 ">
        You gained <span className=" text-green-300">₦420.00</span> this week
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-1.5">
        {[
          { label: "Send", Icon: Send, onClick: onSend },
          { label: "Request", Icon: ArrowUp, onClick: onRequest },
          { label: "Add Money", Icon: Plus, onClick: onAddMoney },
        ].map(({ label, Icon, onClick }) => (
          <button
            key={label}
            type="button"
            onClick={onClick}
            className={clsx(
              "inline-flex items-center gap-2 rounded-xl bg-gray-50",
              " hover:bg-gray-100 active:bg-gray-200 px-2.5 py-1.5 text-sm font-dm-sans font-medium",
              " text-gray-500 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
            )}
          >
            <Icon className="size-4.5 text-primary" />
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import WaitListButton from "./WaitListButton";
import JoinWaitlistModal from "./JoinWaitlistModal";

export default function Header() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const handleJoinWaitlist = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-20">
        <nav className="flex items-center py-4 justify-between    px-[clamp(0.5rem,5vw,112px)]  md:px-[clamp(1rem,5vw,112px)]">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              src="/imgs/brand-logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="inline-block align-middle"
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsNavBarOpen(!isNavBarOpen)}
            className="md:hidden flex justify-center items-center bg-white rounded-full size-8 sm:size-10"
          >
            {isNavBarOpen ? (
              <X className="size-5 sm:size-6 text-[#292D32]" />
            ) : (
              <Menu className="size-5 sm:size-6 text-[#292D32]" />
            )}
          </button>

          {/* Nav Links + Button (shared for mobile & desktop) */}
          <div
            className={clsx(
              "flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 text-sm min-[900px]:text-base font-dm-sans font-semibold transition-all duration-300   md:px-10  absolute md:static top-full left-0 w-full md:w-auto   shadow-lg md:shadow-none md:opacity-100 md:translate-y-0",
              isNavBarOpen
                ? "opacity-100 translate-y-0    px-[clamp(0.5rem,5vw,112px)]  md:px-[clamp(1rem,5vw,112px)] min-h-screen"
                : "opacity-0 -translate-y-2 pointer-events-none md:pointer-events-auto px-0 "
            )}
          >
            {/* <ul className="flex flex-col md:flex-row gap-6 md:gap-8 w-full md:w-auto px-8 md:px-0 py-6 md:py-0"> */}
            <ul
              className={clsx(
                " flex flex-col md:flex-row gap-6 lg:gap-8 w-full md:w-auto  py-4 px-8 lg:px-10 md:text-sm min-[900px]:text-base font-semibold text-3xl leading-7.5 md:leading-none  md:font-normal font-goodly md:font-dm-sans text-white rounded-[2.5rem] md:rounded-full bg-[#f7f9fc35] backdrop-blur-sm  md:bg-[#F7F9FC33] "
              )}
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"#"}>Features</Link>
              </li>
              <li>
                <Link href={"/faqs"}>FAQs</Link>
              </li>
              <li>
                <Link href={"/terms"}>Terms of Condition</Link>
              </li>
            </ul>
            <WaitListButton
              className=" md:hidden w-full"
              onClick={handleJoinWaitlist}
            />
          </div>

          <WaitListButton
            className="hidden md:block"
            onClick={handleJoinWaitlist}
          />
        </nav>
      </header>

      {/* Join Waitlist Modal */}
      <JoinWaitlistModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

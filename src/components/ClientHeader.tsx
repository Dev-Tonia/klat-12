"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import JoinWaitlistModal from "./JoinWaitlistModal";

export default function ClientHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleJoinWaitlist = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-10">
        <nav className=" flex items-center py-4 justify-between px-[clamp(1rem,5vw,112px)]">
          <Link href={"/"}>
            <Image
              src="/imgs/brand-logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="inline-block align-middle"
            />
          </Link>
          <ul className="flex gap-8 py-4 px-10  font-dm-sans text-white bg-[#F7F9FC33] rounded-[2.5rem]">
            <li>
              <Link className=" font-semibold" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className=" font-semibold" href={"#"}>
                Features
              </Link>
            </li>
            <li>
              <Link className=" font-semibold" href={"/faqs"}>
                FAQs
              </Link>
            </li>
            <li>
              <Link className=" font-semibold" href={"/terms"}>
                Terms of Condition
              </Link>
            </li>
          </ul>
          <button
            onClick={handleJoinWaitlist}
            className=" bg-primary text-white font-semibold rounded-[2.5rem] font-inter py-4 px-6 flex items-center justify-center hover:bg-primary/90 transition-colors"
          >
            Join waitlist
          </button>
        </nav>
      </header>

      {/* Join Waitlist Modal */}
      <JoinWaitlistModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

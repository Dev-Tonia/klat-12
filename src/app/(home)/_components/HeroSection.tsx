import React from "react";
import Image from "next/image";
import StackedCards from "./StackedCards";
import DownloadAppBtn from "./DownloadAppBtn";

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-b  pt-20 md:pt-25 lg:pt-32 from-[#779BC1] via-[#9ABFDA] to-[#CBDFEC] min-h-screen flex flex-col place-items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Hero Content */}
      <div className="text-center relative z-10 pb-60 sm:pb-80 md:pb-90 lg:pb-100 pt-30 max-w-3xl mx-auto">
        {/* 👆 pt-32 pushes the hero content below the header */}
        <h1 className=" text-4xl sm:text-5xl lg:text-6xl font-semibold leading-16 tracking-tight text-white font-goodly">
          Chat with anyone and send money instantly
        </h1>
        <p className="mt-5 text-white sm:text-lg font-dm-sans tracking-tight md:text-xl  max-w-2xl mx-auto">
          KLAT-32 brings messaging and payments together so you can send money,
          chat with friends, and do business with ease.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex  font-dm-sans flex-col sm:flex-row justify-center items-center gap-4">
          <DownloadAppBtn className=" w-full sm:w-auto justify-center" />
          <button className="bg-white text-primary font-semibold font-dm-sans leading-6 w-full sm:w-auto px-9 py-4.5 rounded-full">
            Learn More
          </button>
        </div>

        {/* Transaction Cards */}
        <StackedCards />
      </div>

      {/* Cloud Background */}

      <div className="absolute inset-0 z-0">
        {[
          "top-[25%] left-[5%] ",
          "top-[12%] left-[30%] hidden md:block",
          "top-[12%] right-[20%] hidden md:block",
          "top-[18%] md:right-[5%]  -right-[15%]",
          //   second row
          " top-[40%] md:top-[60%] left-[5%] ",
          "top-[55%] right-[5%] hidden md:block",
        ].map((pos, i) => (
          <Image
            key={i}
            src="/imgs/cloud.png"
            alt="cloud"
            width={290}
            height={158}
            className={`absolute animate-cloud ${pos}`}
          />
        ))}
      </div>
    </div>
  );
}

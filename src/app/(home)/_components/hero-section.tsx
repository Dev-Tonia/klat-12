import React from "react";
import Image from "next/image";
import StackedCards from "./StackedCards";

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-b  pt-32 from-[#779BC1] via-[#9ABFDA] to-[#CBDFEC] min-h-screen flex flex-col place-items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Hero Content */}
      <div className="text-center relative z-10 pb-100 pt-30 max-w-3xl mx-auto">
        {/* 👆 pt-32 pushes the hero content below the header */}
        <h1 className=" text-4xl sm:text-5xl lg:text-6xl font-semibold leading-16 tracking-tight text-white font-goodly">
          Chat with anyone and send money instantly
        </h1>
        <p className="mt-5 text-white text-lg font-dm-sans tracking-tight sm:text-xl lg:text-xl max-w-2xl mx-auto">
          KLAT-32 brings messaging and payments together so you can send money,
          chat with friends, and do business with ease.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex  font-dm-sans flex-col md:flex-row justify-center items-center gap-4">
          <button className="bg-primary text-white flex items-center gap-2 px-9 py-4.5 rounded-full">
            <span className=" font-medium font-dm-sans"> Download Klat-32</span>
            <img src="/icon/appstore.svg" alt="Logo" />
            <img src="/icon/playstore.svg" alt="Logo" />
          </button>
          <button className="bg-white text-primary font-semibold font-dm-sans leading-6  px-9 py-4.5 rounded-full">
            Learn More
          </button>
        </div>

        {/* Transaction Cards */}
        <StackedCards />
      </div>

      {/* Cloud Background */}
      <div className="absolute inset-0 z-0">
        {[
          { top: "25%", left: "5%" },
          { top: "12%", left: "30%" },
          { top: "12%", right: "20%" },
          { top: "18%", right: "5%" },
          //   second row
          // { top: "60%", left: "5%" },
          // { top: "55%", right: "5%" },
        ].map((pos, i) => (
          <Image
            key={i}
            src="/imgs/cloud.png"
            alt="cloud"
            width={290}
            height={158}
            className="absolute  animate-cloud"
            style={pos}
          />
        ))}
      </div>
    </div>
  );
}

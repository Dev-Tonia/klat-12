import React from "react";
import GradientCard from "./GradientCard";
import Image from "next/image";
import GradientCardHeading from "./GradientCardHeading";

export default function HandlePayments() {
  return (
    <section className=" py-25    px-[clamp(0.5rem,5vw,112px)]  md:px-[clamp(1rem,5vw,112px)] hidden md:block">
      <GradientCard className=" bg-[linear-gradient(179.54deg,#CBDFEC_-3.44%,#9ABFDA_45.36%,#779BC1_89.47%)]">
        <div className=" flex gap-20 py-10 px-9 items-center ">
          <div className="relative w-4/12 ">
            <Image
              src="/imgs/app.png"
              alt="phone"
              height={600}
              width={330}
              className=" border-[10px] border-primary rounded-[2.5rem]  w-fit object-contain"
            />
          </div>
          <div className=" w-8/12">
            <div className=" size-14 bg-primary rounded-full flex justify-center items-center">
              <Image
                src="/imgs/roboto.gif"
                alt="klat-32"
                height={40}
                width={40}
                className=" object-contain"
              />
            </div>
            <div className=" my-5 border border-white bg-white/30 w-fit rounded-2xl text-primary py-1 px-3 font-dm-sans text-sm font-medium">
              Meet KPA - Your Smart Personal Assistant
            </div>
            <GradientCardHeading
              titleClass=" max-w-lg"
              data={{
                title: "Handle Payments. Answer Questions. Get Things Done.",
                desc: "KPA is your 24/7 smart assistant built into Klat-32, designed to simplify your financial life. Whether you're topping up airtime, paying bills, checking your balance, or fetching account statements, KPA handles it all with a quick message.",
              }}
            />
            <div className=" h-85 relative mt-10">
              <Image
                src="/imgs/group-service.png"
                alt="chat"
                fill
                className=" object-contain"
              />
            </div>
          </div>
        </div>
      </GradientCard>
    </section>
  );
}

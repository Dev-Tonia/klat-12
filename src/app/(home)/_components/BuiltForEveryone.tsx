import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import DownloadAppBtn from "./DownloadAppBtn";
import MobileFrame from "./MobileFrame";
import ChatListCard from "./ChatListCard";
import ChatHeader from "./ChatHeader";
import GradientCard from "./GradientCard";
export default function BuiltForEveryone() {
  return (
    <section className=" bg-white    px-[clamp(0.5rem,5vw,112px)]  md:px-[clamp(1rem,5vw,112px)] sm:pt-10 pt-8 md:pt-13 lg:pt-15.5  ">
      <div className=" lg:px-10">
        {/* header */}
        <SectionHeader
          className=" max-w-[700px]"
          title="Built for Everyone. Designed Around You."
          desc="Whether you're running a business or handling personal payments, KLAT-32 gives you the tools to transact smarter, faster, and with more freedom."
        />
        <div className=" grid gap-4 items-stretch min-h-80 lg:grid-cols-3 mt-12.5">
          <div className=" lg:col-span-2 relative  rounded-[1.25rem] pt-7 px-5 md:px-7 lg:px-8.5  bg-gradient-to-b from-[#779BC1] via-[#9ABFDA] to-[#CBDFEC] overflow-hidden">
            <div className=" relative z-10 ">
              <div className=" flex flex-col md:flex-row justify-between gap-4">
                <div className=" md:max-w-[550px]">
                  <div className=" flex flex-col h-full justify-between gap-6 pb-8">
                    {/* heading */}
                    <div className="">
                      <div className="size-8 bg-gray-50 rounded-full flex justify-center items-center">
                        <div className="relative size-6">
                          <Image
                            fill
                            src="/icon/arrow-up.svg"
                            alt="app store"
                          />
                        </div>
                      </div>
                      <h3 className=" font-semibold text-2xl sm:text-3xl lg:text-[2.5rem] mt-8 tracking-tight font-goodly">
                        For Businesses
                      </h3>
                    </div>
                    <div className="">
                      <p className="font-dm-sans mb-4 text-white tracking-tight">
                        Showcase your products, accept seamless payments, manage
                        customers, and grow your brand — all in one smart
                        chat-first platform.{" "}
                      </p>
                      <DownloadAppBtn />
                    </div>
                  </div>
                </div>

                {/* mobile frame */}
                <div className="flex-shrink-  w-full max-w-80  mx-auto md:mx-0 ">
                  <MobileFrame cardHeight="h-100">
                    <ChatHeader />
                    {/* chat list */}
                    <div className=" mt-11">
                      <h6 className=" text-ink-darkest font-inter font-bold leading-4 ">
                        Unread – 2
                      </h6>
                      <div className=" my-6 space-y-6">
                        {/* chat item */}
                        <ChatListCard
                          avatar={"/imgs/avatar-4.png"}
                          name={"Josiah Zayner"}
                          time={"9.56 AM"}
                          message={"Hi there!"}
                          subMessage={"How are you today?"}
                        />
                        <ChatListCard
                          avatar={"/imgs/avatar-4.png"}
                          name={"Josiah Zayner"}
                          time={"9.56 AM"}
                          message={"Hi there!"}
                          subMessage={"How are you today?"}
                        />
                      </div>
                    </div>
                  </MobileFrame>
                </div>
              </div>
            </div>

            {/* Cloud Background */}
            <div className="absolute inset-0 z-0">
              {[
                "top-[25%] left-[5%] ",
                "top-[12%] left-[30%] hidden md:block",
                "top-[12%] right-[20%] hidden md:block",
                "top-[18%] md:right-[5%]  -right-[15%]",
              ].map((pos, i) => (
                <Image
                  key={i}
                  src="/imgs/cloud.png"
                  alt="cloud"
                  width={230}
                  height={158}
                  className={`absolute animate-cloud ${pos}`}
                />
              ))}
            </div>
          </div>
          <div className=" h-full lg:col-span-1">
            <GradientCard className="  bg-gradient-to-b from-[#779BC1] via-[#9ABFDA] to-[#CBDFEC] h-full">
              <div className=" flex flex-col h-full justify-between gap-6 pb-8">
                {/* heading */}
                <div className="">
                  <div className="size-8 bg-gray-50 rounded-full flex justify-center items-center">
                    <div className="relative size-6">
                      <Image fill src="/icon/arrow-up.svg" alt="app store" />
                    </div>
                  </div>
                  <h3 className=" font-semibold text-2xl sm:text-3xl lg:text-[2.5rem] mt-8 text-white tracking-tight font-goodly">
                    For Individuals
                  </h3>
                </div>
                <div className="">
                  <p className="font-dm-sans mb-4  text-white tracking-tight">
                    Send money, shop smart, split bills, and pay with ease —
                    chat your way through everyday payments with KLAT-32.
                  </p>
                  <DownloadAppBtn />
                </div>
              </div>
            </GradientCard>
          </div>
        </div>
      </div>
    </section>
  );
}

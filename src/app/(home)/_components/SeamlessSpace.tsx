import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import CardStack from "./StackedCards";
export default function SeamlessSpace() {
  return (
    <section className=" bg-white    px-[clamp(0.5rem,5vw,112px)]  md:px-[clamp(1rem,5vw,112px)] pt-15.5 ">
      <div className=" px-10">
        {/* header */}
        <SectionHeader
          title="Everything in One Seamless Space"
          desc="You can voice or video call, chat about a product, and complete a payment all in one smooth, beautifully designed interface."
        />
      </div>
      <section className="w-full py-10 px-2 md:px-0 ">
        <div className=" sm:grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 grid-rows-3 gap-6 max-w-6xl mx-auto space-y-3 sm:space-y-0 w-full">
          {/* Top 1 */}
          <div className="rounded-2xl overflow-hidden relative h-[230px] sm:h-full  sm:col-start-1 sm:col-span-2 lg:col-span-1 row-start-1 row-span-1">
            <div className=" relative h-[230px] w-full">
              <Image
                src="/imgs/business-showcase.png"
                alt="Showcase Your Business"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black/10 to-black/50 flex items-start p-4">
              <div className="text-white font-semibold font-goodly text-xl">
                Showcase Your Business.
                <br />
                Chat with Customers. Sell Smart.
              </div>
            </div>
          </div>
          {/* Top 2 */}
          <div className="rounded-2xl overflow-hidden relative sm:col-start-1 sm:col-span-2 lg:col-span-1 sm:row-start-2 sm:row-span-2 bg-[#EAF3FB] px-6 py-11 flex flex-col justify-end">
            {/* Image with chat overlay */}
            <div className="relative w-fit mx-auto">
              {/* Circular Image */}
              <div className="relative size-[182px] rounded-full overflow-hidden">
                <Image
                  src="/imgs/chat-product.png"
                  alt="Chat About It"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Chat bubbles overlay */}
              <div className="absolute -top-10 -right-20 flex flex-col space-y-2 items-end">
                <div className="bg-white max-w-[178px] rounded-xl px-4 py-2 text-[10px] font-dm-sans  text-[#242424] shadow">
                  We accept bank transfers, card payments, and in-app wallet
                  transfers
                </div>

                <div className="bg-blue-500 w-fit rounded-xl px-3 py-1 text-[10px] font-dm-sans  text-white shadow">
                  Great!
                </div>

                <div className="bg-white max-w-[160px] rounded-xl px-4 py-2 text-[10px] font-dm-sans  text-[#242424] shadow">
                  I’ll send a product catalog you might be interested in
                </div>

                <div className="text-[10px] text-gray-500 pl-2">12:08</div>
              </div>
            </div>

            {/* Text content */}
            <div className="mt-6 ">
              <div className="text-black font-goodly font-semibold text-xl">
                See It. Chat About It.
                <br />
                Buy Instantly.
              </div>
              <div className="text-[#242424] font-dm-sans text-sm mt-2">
                Preview the product, ask questions, and close the deal — all in
                one seamless chat.
              </div>
            </div>
          </div>
          {/* Top 3 */}
          <div className="rounded-2xl overflow-hidden relative lg:h-full h-[450px] sm:col-start-1 sm:col-span-2 lg:col-span-1 lg:col-start-2 sm:row-start-4 lg:row-start-1 sm:row-span-2 bg-white">
            <div className="absolute inset-0">
              <Image
                src="/imgs/wallet-transfer.jpg"
                alt="Wallet Transfer"
                fill
                className="object-cover"
              />
            </div>

            {/* Overlay at bottom of image */}
            <div className="absolute bottom-40 left-0 right-0 z-10 p-4">
              <CardStack />
            </div>
          </div>

          {/* Top 4 */}
          <div className="rounded-2xl overflow-hidden relative  sm:col-start-3 sm:lg:col-start-2 sm:col-span-2 lg:col-span-1 lg:h-full  h-[230px] sm:h-[450px] sm:row-start-4 lg:row-start-3">
            <Image
              src="/imgs/scan-to-pay.png"
              alt="Scan to pay"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/10 to-black/50 flex items-start p-4">
              <div className="text-white font-semibold font-goodly text-xl">
                Scan to pay
              </div>
            </div>
          </div>
          {/* Top  5 */}
          <div className="rounded-2xl overflow-hidden relative h-screen  sm:h-full sm:col-start-3 sm:row-start-1 sm:col-span-2 lg:col-span-1 sm:row-span-3">
            <Image
              src="/imgs/video-call.png"
              alt="Video Call"
              fill
              className="object-cover"
            />
            {/* Overlay for call controls */}
          </div>
        </div>
      </section>
    </section>
  );
}

import React from "react";
import MobileFrame from "./MobileFrame";
import GradientCard from "./GradientCard";
import GradientCardHeading from "./GradientCardHeading";

export default function MadeEverydayBusiness() {
  return (
    <section className=" bg-white px-[clamp(1rem,5vw,112px)] pt-15.5 ">
      <div className=" px-10">
        {/* header */}
        <div className=" tracking-tighter text-primary max-w-xl mx-auto flex flex-col gap-5 text-center ">
          <h2 className=" font-goodly font-semibold text-6xl leading-16">
            Made for Everyday and Business Use
          </h2>
          <p className=" font-dm-sans text-xl px-9 ">
            Whether you’re sending a quick transfer or running a business,
            KLAT-32 makes it easy to get paid
          </p>
        </div>
        <div className=" mt-28 max-w-265 mx-auto space-y-2.5 ">
          {/* cards */}
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
            <GradientCard>
              <div className=" flex  h-full flex-col justify-between">
                <GradientCardHeading
                  data={{
                    icon: "/icon/message.svg",
                    title: "Chat, Call, and Video Call",
                    desc: "Message friends, call your customers or start a video chat without switching apps.",
                  }}
                />
                {/* phone frame */}
                <div className=" flex justify-center items-center ">
                  <MobileFrame />
                </div>
              </div>
            </GradientCard>
            <GradientCard>
              <div className=" h-full flex flex-col justify-between">
                <GradientCardHeading
                  data={{
                    icon: "/icon/send.svg",
                    title: "Payment in Chat",
                    desc: "Send and receive money right inside your conversations. Whether it's a friend or a merchant",
                  }}
                />
                {/* phone frame */}
                <div className=" flex justify-center items-center ">
                  <MobileFrame />
                </div>
              </div>
            </GradientCard>
          </div>
          <GradientCard>
            <div className=" flex justify-between">
              <div className=" max-w-[550px]">
                <GradientCardHeading
                  data={{
                    icon: "/icon/money.svg",
                    title: "The Smart Way to Manage Your Balance",
                    desc: "Your KLAT balance works just like your wallet, but smarter. You can view your funds, send money to any Nigerian bank, or accept payments using your personal QR code.",
                  }}
                />
              </div>
              <div className="flex-shrink-0  w-90 ">
                <MobileFrame />
              </div>
            </div>
          </GradientCard>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import MobileFrame from "./MobileFrame";
import GradientCard from "./GradientCard";
import GradientCardHeading from "./GradientCardHeading";
import ChatHeader from "./ChatHeader";
import ChatListCard from "./ChatListCard";
import SectionHeader from "./SectionHeader";
import WalletHeader from "./WalletHeader";

export default function MadeEverydayBusiness() {
  return (
    <section className=" bg-white    px-[clamp(0.5rem,5vw,112px)]  md:px-[clamp(1rem,5vw,112px)] pt-15.5 ">
      <div className=" px-10">
        {/* header */}
        <SectionHeader
          title="Made for Everyday and Business Use"
          desc=" Whether you’re sending a quick transfer or running a business, KLAT-32
        makes it easy to get paid"
        />
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
                  <MobileFrame>
                    <ChatHeader />
                    {/* chat list */}
                    <div className="  mt-7 md:mt-9 lg:mt-11">
                      <h6 className=" text-ink-darkest font-inter font-bold leading-4 sm:text-sm text-xs lg:text-base ">
                        Unread – 2
                      </h6>
                      <div className=" my-4 md:my-5 lg:my-6 space-y-4 md:space-y-5 lg:space-y-6">
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
                  <MobileFrame>
                    <ChatHeader />
                    {/* chat list */}
                    <div className="  mt-7 md:mt-9 lg:mt-11">
                      <h6 className=" text-ink-darkest font-inter font-bold leading-4 sm:text-sm text-xs lg:text-base ">
                        Unread – 2
                      </h6>
                      <div className=" my-4 md:my-5 lg:my-6 space-y-4 md:space-y-5 lg:space-y-6">
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
            </GradientCard>
          </div>
          <GradientCard>
            <div className=" gap-4 flex flex-col min-[860px]:flex-row items-end justify-between">
              <div className=" max-w-[550px]">
                <GradientCardHeading
                  data={{
                    icon: "/icon/money.svg",
                    title: "The Smart Way to Manage Your Balance",
                    desc: "Your KLAT balance works just like your wallet, but smarter. You can view your funds, send money to any Nigerian bank, or accept payments using your personal QR code.",
                  }}
                />
              </div>
              <div className="flex-shrink-0 mx-auto min-[860px]:mx-0 sm:w-90 ">
                <MobileFrame cardHeight=" h-50 min-[860px]:h-72">
                  <WalletHeader balance={124420.5} />
                </MobileFrame>
              </div>
            </div>
          </GradientCard>
        </div>
      </div>
    </section>
  );
}

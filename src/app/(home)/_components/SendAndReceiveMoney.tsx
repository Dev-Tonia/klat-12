import React from "react";
import GradientCard from "./GradientCard";
import GradientCardHeading from "./GradientCardHeading";
import DownloadAppBtn from "./DownloadAppBtn";
import MobileFrame from "./MobileFrame";
import ChatListCard from "./ChatListCard";
import ChatHeader from "./ChatHeader";
const items = [
  {
    id: 1,
    text: "Fast and Secure Transaction",
  },
  {
    id: 2,
    text: "Free Peer-2-Peer Transfers",
  },
  {
    id: 3,
    text: "Unified Messaging & Payment",
  },
  {
    id: 4,
    text: "Real Time Notification",
  },
];

export default function SendAndReceiveMoney() {
  return (
    <section className="  py-12 sm:py-16 md:py-20 lg:py-25    px-[clamp(0.5rem,5vw,112px)]  md:px-[clamp(1rem,5vw,112px)]">
      <GradientCard className=" bg-[linear-gradient(179.54deg,#CBDFEC_-3.44%,#9ABFDA_45.36%,#779BC1_89.47%)] min-[800px]:pb-16 pb-0 lg:pb-22 sm:pt-16 pt-10 md:pt-20 min-[800px]:pt-29 lg:pt-35">
        <div className=" flex-col min-[800px]:flex-row flex gap-20 pt-10 lg:px-9 items-center ">
          <div className=" min-[800px]:w-[60%]">
            <div className=" my-5 border border-white bg-white/30 w-fit rounded-2xl text-primary py-1 px-3 font-dm-sans text-sm font-medium">
              How it works
            </div>
            <GradientCardHeading
              data={{
                title:
                  "Send and receive money without ever leaving your conversation",
                desc: "No switching apps or copying account numbers. Just chat, tap, and pay. KLAT-32 keeps payments flowing inside every conversation.",
              }}
            />
            <DownloadAppBtn />
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 max-w-11/12 w-full">
              {items.map((item) => (
                <div
                  className=" bg-white rounded-xl py-2.5 px-5 font-goodly text-xl leading-5.5 tracking-tight font-medium"
                  key={item.id}
                >
                  <div className=" size-10 rounded-full bg-secondary-50 flex justify-center items-center ">
                    {item.id}
                  </div>

                  <p className=" mt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className=" min-[800px]:bg-white w-full  min-[800px]:rounded-2xl min-[800px]:pt-10 xl:px-15 min-[800px]:w-[40%] ">
            <MobileFrame
              cardHeight=" min-[800px]:h-full  h-85"
              cardWidth=" max-w-100 mx-auto"
            >
              <ChatHeader
                avatarClassName="size-6.5"
                titleClassName=" text-lg"
                editIconClassName=" size-8.5"
                settingsIconClassName=" size-8.5"
              />
              {/* chat list */}
              <div className=" mt-5">
                <h6 className=" text-ink-darkest font-inter text-sm font-bold leading-4 ">
                  Unread – 2
                </h6>
                <div className=" my-6 space-y-4">
                  {/* chat item */}
                  <ChatListCard
                    avatar={"/imgs/avatar-4.png"}
                    avatarClassName="size-8.5"
                    nameClassName=" text-xs"
                    timeClassName=" text-xs"
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
                    avatarClassName="size-8.5"
                    nameClassName=" text-xs"
                    timeClassName=" text-xs"
                    subMessage={"How are you today?"}
                  />
                </div>
              </div>
              <div className=" mt-5">
                <h6 className=" text-ink-darkest font-inter text-sm font-bold leading-4 ">
                  Others
                </h6>
                <div className=" my-4 space-y-4">
                  {/* chat item */}
                  <ChatListCard
                    avatar={"/imgs/avatar-4.png"}
                    avatarClassName="size-8.5"
                    nameClassName=" text-xs"
                    timeClassName=" text-xs"
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
                    avatarClassName="size-8.5"
                    nameClassName=" text-xs"
                    timeClassName=" text-xs"
                    subMessage={"How are you today?"}
                  />
                  <ChatListCard
                    avatar={"/imgs/avatar-4.png"}
                    name={"Josiah Zayner"}
                    time={"9.56 AM"}
                    message={"Hi there!"}
                    avatarClassName="size-8.5"
                    nameClassName=" text-xs"
                    timeClassName=" text-xs"
                    subMessage={"How are you today?"}
                  />
                </div>
              </div>
            </MobileFrame>
          </div>
        </div>
      </GradientCard>
    </section>
  );
}

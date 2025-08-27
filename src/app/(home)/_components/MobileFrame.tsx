import React from "react";
import { Search } from "lucide-react";

export default function MobileFrame() {
  return (
    <div className=" w-full h-85 border-[10px] border-b-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#FFFFFF_60%)] border-white rounded-t-[2.5rem] max-w-90 overflow-hidden">
      <div className=" relative min-h-50  ">
        <img
          src="/imgs/mobile-frame-bg.png"
          alt="phone"
          className=" absolute w-full inset-0 -top-3.5 h-50"
        />
        <div className=" relative z-10  px-4 pt-3">
          {/* status bar */}
          <div className="  w-full flex justify-between items-center text-white text-sm font-dm-sans">
            <span className=" text-black font-bold block px-1">9:41</span>
            <span className=" flex items-center gap-1">
              <img src="/icon/signal.svg" alt="signal" />
              <img src="/icon/wifi.svg" alt="wifi" />
              <img src="/icon/battery.svg" alt="battery" />
            </span>
          </div>
          {/* content area */}
          <div className=" mt-4.5">
            {/* chat */}
            <div className=" flex justify-between items-center ">
              <div className=" flex items-center gap-2.5">
                <div className=" size-8 rounded-full overflow-hidden">
                  <img
                    src="/imgs/avatar-3.jpg"
                    alt="profile"
                    className=" w-full h-full object-cover"
                  />
                </div>
                <h5 className=" text-black leading-7.5 text-2xl font-bold font-dm-sans">
                  Chat
                </h5>
              </div>
              <div className=" size-10.5 bg-gray-50 rounded-full flex justify-center items-center ">
                <img src="/icon/edit.svg" alt="edit store" />
              </div>
            </div>
            {/* search and filter */}
            <div className=" py-3 flex gap-2.5">
              <div className=" rounded-xl bg-secondary flex items-center gap-2.5 px-4 py-2.5 flex-1 ">
                <Search className=" size-5 text-[#575757]" />
                <p className=" font-dm-sans text-sm text-disabled ">
                  Search chat...
                </p>
              </div>
              <div className=" bg-secondary  size-10.5  rounded-full flex justify-center items-center ">
                <img src="/icon/setting.svg" alt="setting store" />
              </div>
            </div>
            {/* chat list */}
            <div className=" mt-11">
              <h6 className=" text-ink-darkest font-inter font-bold leading-4 ">
                Unread – 2
              </h6>
              <div className=" my-6 space-y-6">
                {/* chat item */}

                <div className=" flex  gap-2.5 ">
                  <div className=" size-10 rounded-full overflow-hidden">
                    <img
                      src="/imgs/avatar-4.png"
                      alt="profile"
                      className=" w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-ink-darkest flex-1 leading-3.5 text-sm">
                    <div className=" flex justify-between items-center">
                      <p className=" ">Josiah Zayner</p>
                      <span className=" text-sm text-ink-light  leading-4 ">
                        9.56 AM
                      </span>
                    </div>

                    <p className="  font-bold mt-2">Hi there!</p>
                    <p className=" text-ink-light leading-4 mt-1">
                      How are you today?
                    </p>
                  </div>
                </div>
                <div className=" flex  gap-2.5 ">
                  <div className=" size-10 rounded-full overflow-hidden">
                    <img
                      src="/imgs/avatar-4.png"
                      alt="profile"
                      className=" w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-ink-darkest flex-1 leading-3.5 text-sm">
                    <div className=" flex justify-between items-center">
                      <p className=" ">Josiah Zayner</p>
                      <span className=" text-sm text-ink-light  leading-4 ">
                        9.56 AM
                      </span>
                    </div>

                    <p className="  font-bold mt-2">Hi there!</p>
                    <p className=" text-ink-light leading-4 mt-1">
                      How are you today?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

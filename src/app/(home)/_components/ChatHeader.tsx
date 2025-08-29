import clsx from "clsx";
import { Search } from "lucide-react";

interface ChatHeaderProps {
  avatarClassName?: string;
  titleClassName?: string;
  editIconClassName?: string;
  settingsIconClassName?: string;
  containerClassName?: string;
  searchPlaceholder?: string;
}

export default function ChatHeader({
  avatarClassName = "size-8 ",
  titleClassName = " text-2xl ",
  editIconClassName = "size-10.5 ",
  settingsIconClassName = " size-10.5",
  containerClassName = "",
}: // placeholderClass = "Search chat...",
ChatHeaderProps) {
  return (
    <>
      <div className=" flex justify-between items-center ">
        <div className=" flex items-center gap-2.5">
          <div
            className={clsx(
              " size-8 rounded-full overflow-hidden",
              avatarClassName
            )}
          >
            <img
              src="/imgs/avatar-3.jpg"
              alt="profile"
              className=" w-full h-full object-cover"
            />
          </div>
          <h5
            className={clsx(
              " text-black leading-7.5 font-bold font-dm-sans",
              titleClassName
            )}
          >
            Chat
          </h5>
        </div>
        <div
          className={clsx(
            " bg-gray-50 rounded-full flex justify-center items-center ",
            editIconClassName
          )}
        >
          <img src="/icon/edit.svg" alt="edit store" />
        </div>
      </div>
      {/* search and filter */}
      <div className=" py-3 flex gap-2.5">
        <div className=" rounded-xl bg-secondary flex items-center gap-2.5 px-4 py-2.5 flex-1">
          <Search className=" size-5 text-[#575757]" />
          <p className=" font-dm-sans text-sm text-disabled ">Search chat...</p>
        </div>
        <div
          className={clsx(
            " bg-secondary  rounded-full flex justify-center items-center ",
            settingsIconClassName
          )}
        >
          <img src="/icon/setting.svg" alt="setting store" />
        </div>
      </div>
    </>
  );
}

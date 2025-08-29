import React from "react";

export default function DownloadAppBtn() {
  return (
    <button className="bg-primary text-white flex items-center gap-2 px-9 py-4.5 rounded-full">
      <span className=" font-medium font-dm-sans"> Download Klat-32</span>
      <img src="/icon/appstore.svg" alt="app store" />
      <img src="/icon/playstore.svg" alt="play store" />
    </button>
  );
}

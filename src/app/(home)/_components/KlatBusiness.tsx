import React from "react";
import GradientCard from "./GradientCard";
import Image from "next/image";
import GradientCardHeading from "./GradientCardHeading";
import MobileFrame from "./MobileFrame";
import ProductCard from "./ProductCard";
import MarketplaceHeader from "./MarketplaceHeader";
const items = [
  "Receive Payments from Customers Instantly",
  "Daily Business Account Access",
  "Automated Receipts, Inventory, and Client Messaging",
  "List Your Products & Services for Instant Orders",
  "API & Business Integrations – Tailored for growth",
  "Manage Customers, Vendors, and Team Communication",
];
export default function KlatBusiness() {
  return (
    <section className=" py-25 px-[clamp(1rem,5vw,112px)]">
      <GradientCard className=" bg-[linear-gradient(179.54deg,#CBDFEC_-3.44%,#9ABFDA_45.36%,#779BC1_89.47%)]">
        <div className=" flex gap-20 pt-10 px-9 items-center ">
          <div className=" pb-10 w-8/12">
            <div className=" size-15 bg-gray-50 rounded-full flex justify-center items-center ">
              <img src="/icon/shop.svg" alt="app store" />
            </div>
            <div className=" my-5 border border-white bg-white/30 w-fit rounded-2xl text-primary py-1 px-3 font-dm-sans text-sm font-medium">
              Join the Future of Social Commerce
            </div>
            <GradientCardHeading
              data={{
                title: "Klat Business makes it simple, secure, and scalable.",
                desc: "Klat Business is built for entrepreneurs, small businesses, and growing brands who want to sell, chat, and get paid — all in one place.",
              }}
            />
            <ul className="mt-8 space-y-4 font-dm-sans text-white text-lg">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <img
                    src="/icon/trick-circle.svg"
                    alt="check"
                    className="w-6 h-6 mt-1"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className=" w-4/12 shrink-0 ">
            <MobileFrame cardHeight="h-160">
              <MarketplaceHeader />
              <div className=" space-y-3">
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </MobileFrame>
          </div>
        </div>
      </GradientCard>
    </section>
  );
}

import React from "react";
import SectionHeader from "./SectionHeader";

export default function BuiltForEveryone() {
  return (
    <section className=" bg-white px-[clamp(1rem,5vw,112px)] pt-15.5 ">
      <div className=" px-10">
        {/* header */}
        <SectionHeader
          className=" max-w-[700px]"
          title="Built for Everyone. Designed Around You."
          desc="Whether you're running a business or handling personal payments, KLAT-32 gives you the tools to transact smarter, faster, and with more freedom."
        />
      </div>
    </section>
  );
}

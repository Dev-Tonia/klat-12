import Image from "next/image";
import HeroSection from "./_components/hero-section";
import MadeEverydayBusiness from "./_components/MadeEverydayBusiness";
// import StackedCards from "./_components/StackedCards";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MadeEverydayBusiness />
    </>
  );
}

import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import MadeEverydayBusiness from "./_components/MadeEverydayBusiness";
import HandlePayments from "./_components/HandlePayments";
import KlatBusiness from "./_components/KlatBusiness";
import SendAndReceiveMoney from "./_components/SendAndReceiveMoney";
import SeamlessSpace from "./_components/SeamlessSpace";
import BuiltForEveryone from "./_components/BuiltForEveryone";
// import StackedCards from "./_components/StackedCards";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MadeEverydayBusiness />
      <HandlePayments />
      <KlatBusiness />
      <SendAndReceiveMoney />
      <SeamlessSpace />
      <BuiltForEveryone />
    </>
  );
}

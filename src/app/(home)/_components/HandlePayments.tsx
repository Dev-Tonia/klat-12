"use client";

import React, { useEffect, useRef, useState } from "react";
import GradientCard from "./GradientCard";
import Image from "next/image";
import GradientCardHeading from "./GradientCardHeading";

// Import all logo assets
import mtnLogo from "../../../assets/mtn.png";
import gloLogo from "../../../assets/glo.png";
import airtelLogo from "../../../assets/airtel.png";
import nineMobileLogo from "../../../assets/9mobile.png";
import dstvLogo from "../../../assets/dstv.png";
import gotvLogo from "../../../assets/gotv.png";
import startimesLogo from "../../../assets/startimes.png";
import phedLogo from "../../../assets/phed.png";
import ikejaLogo from "../../../assets/ikeja.png";
import ekedcLogo from "../../../assets/ekedc.png";
import abjElectricityLogo from "../../../assets/abjelectricity.png";
import kadunaLogo from "../../../assets/kaduna.png";

// Services data with imported logos
const services = [
  {
    "id": "mtn",
    "name": "MTN Nigeria",
    "logo": mtnLogo
  },
  {
    "id": "glo",
    "name": "Glo Mobile",
    "logo": gloLogo
  },
  {
    "id": "airtel",
    "name": "Airtel Nigeria",
    "logo": airtelLogo
  },
  {
    "id": "9mobile",
    "name": "9mobile",
    "logo": nineMobileLogo
  },
  {
    "id": "dstv",
    "name": "DSTV",
    "logo": dstvLogo
  },
  {
    "id": "gotv",
    "name": "GOTV",
    "logo": gotvLogo
  },
  {
    "id": "startimes",
    "name": "Startimes",
    "logo": startimesLogo
  },
  {
    "id": "phed",
    "name": "PHED",
    "logo": phedLogo
  },
  {
    "id": "ikeja-electric",
    "name": "Ikeja Electric",
    "logo": ikejaLogo
  },
  {
    "id": "eko-electric",
    "name": "Eko Electric",
    "logo": ekedcLogo
  },
  {
    "id": "abuja-electric",
    "name": "Abuja Electric",
    "logo": abjElectricityLogo
  },
  {
    "id": "kaduna-electric",
    "name": "Kaduna Electric",
    "logo": kadunaLogo
  }
];

export default function HandlePayments() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Start animation slightly before fully visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className=" py-25 px-[clamp(1rem,5vw,112px)]">
      <GradientCard className=" bg-[linear-gradient(179.54deg,#CBDFEC_-3.44%,#9ABFDA_45.36%,#779BC1_89.47%)]">
        <div className=" flex gap-20 py-10 px-9 items-center ">
          <div className="relative w-4/12 ">
            <Image
              src="/imgs/app.png"
              alt="phone"
              height={600}
              width={330}
              className=" border-[10px] border-primary rounded-[2.5rem]  w-fit object-contain"
            />
          </div>
          <div className=" w-8/12">
            <div className=" size-14 bg-primary rounded-full flex justify-center items-center">
              <Image
                src="/imgs/roboto.gif"
                alt="klat-32"
                height={40}
                width={40}
                className=" object-contain"
              />
            </div>
            <div className=" my-5 border border-white bg-white/30 w-fit rounded-2xl text-primary py-1 px-3 font-dm-sans text-sm font-medium">
              Meet KPA - Your Smart Personal Assistant
            </div>
            <GradientCardHeading
              titleClass=" max-w-lg"
              data={{
                title: "Handle Payments. Answer Questions. Get Things Done.",
                desc: "KPA is your 24/7 smart assistant built into Klat-32, designed to simplify your financial life. Whether you're topping up airtime, paying bills, checking your balance, or fetching account statements, KPA handles it all with a quick message.",
              }}
            />
            <div className=" h-85 relative mt-10">
              {/* Service Bubbles Container */}
              <div className="relative w-full h-full">
                <style jsx>{`
                  @keyframes fallAndFade {
                    0% {
                      transform: translateY(-100px) rotate(0deg);
                      opacity: 0;
                    }
                    100% {
                      transform: translateY(0) var(--final-rotation);
                      opacity: 1;
                    }
                  }
                  
                  .bubble-animate {
                    animation: fallAndFade 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                  }
                `}</style>
                {services.map((service, index) => {
                  // Define positions and rotations for slanted circular layout with better spacing
                  const bubbleStyles = [
                    { top: '5%', left: '5%', transform: 'rotate(-12deg)' }, // MTN Nigeria
                    { top: '8%', right: '5%', transform: 'rotate(8deg)' }, // Glo Mobile
                    { top: '25%', left: '2%', transform: 'rotate(-5deg)' }, // Airtel Nigeria
                    { top: '28%', right: '2%', transform: 'rotate(15deg)' }, // 9mobile
                    { top: '45%', left: '8%', transform: 'rotate(-8deg)' }, // DSTV
                    { top: '48%', right: '8%', transform: 'rotate(12deg)' }, // GOTV
                    { top: '65%', left: '5%', transform: 'rotate(-15deg)' }, // Startimes
                    { top: '68%', right: '5%', transform: 'rotate(6deg)' }, // PHED
                    { top: '85%', left: '15%', transform: 'rotate(-10deg)' }, // Ikeja Electric
                    { top: '88%', right: '15%', transform: 'rotate(10deg)' }, // Eko Electric
                    { top: '15%', left: '35%', transform: 'rotate(3deg)' }, // Abuja Electric
                    { top: '65%', left: '40%', transform: 'rotate(-7deg)' }, // Kaduna Electric
                  ];

                  const style = bubbleStyles[index] || { top: '50%', left: '50%', transform: 'rotate(0deg)' };
                  const animationDelay = index * 0.1; // Stagger the animations

                  return (
                    <div
                      key={service.id}
                      className={`absolute bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-white/20 transition-all duration-300 ${
                        isVisible ? 'bubble-animate' : 'opacity-0'
                      }`}
                      style={{
                        top: style.top,
                        left: style.left,
                        right: style.right,
                        '--final-rotation': style.transform,
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        width: '205px',
                        height: '52px',
                        animationDelay: `${animationDelay}s`,
                      } as React.CSSProperties & { '--final-rotation': string }}
                    >
                      <div className="flex items-center gap-3 w-full h-full">
                        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={service.logo}
                            alt={service.name}
                            width={32}
                            height={32}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-800 flex-1 text-left">
                          {service.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </GradientCard>
    </section>
  );
}

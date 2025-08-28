"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import terms from "./contentData.json";

export default function TermsContent() {
  const [activeId, setActiveId] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.2 }
    );

    document.querySelectorAll("section div[id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero */}
      <div className="relative bg-gradient-to-b from-[#779BC1] via-[#9ABFDA] to-[#CBDFEC] min-h-[60vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="text-center relative z-10 max-w-3xl mx-auto">
          <h1 className=" text-4xl sm:text-5xl lg:text-6xl font-semibold leading-16 tracking-tight text-white font-goodly">
            Terms and Conditions
          </h1>
          <p className="mt-5 text-white text-lg font-dm-sans tracking-tight sm:text-xl lg:text-xl max-w-2xl mx-auto">
            Updated June 2nd 2025
          </p>
        </div>

        {/* Cloud BG */}
        <div className="absolute inset-0 z-0">
          {[
            { top: "25%", left: "5%" },
            { top: "12%", left: "30%" },
            { top: "12%", right: "20%" },
            { top: "18%", right: "5%" },
          ].map((pos, i) => (
            <Image
              key={i}
              src="/imgs/cloud.png"
              alt="cloud"
              width={290}
              height={158}
              className="absolute animate-cloud w-24 h-14 sm:w-40 sm:h-24 lg:w-[290px] lg:h-[158px]"
              style={pos}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="font-sans max-w-6xl mx-auto w-full p-8 sm:p-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10">
          {/* Sidebar */}
          <aside className="hidden lg:block sticky top-20 self-start h-fit">
            <nav className="space-y-4 text-sm text-gray-700">
              <a
                href="#overview"
                className={`font-bold ${
                  activeId === "overview" ? "text-[#779BC1]" : ""
                }`}>
                Overview
              </a>
              <ul className="space-y-2 mt-3">
                {terms.map((term) => (
                  <li key={term.id}>
                    <a
                      href={`#${term.id}`}
                      className={`hover:text-[#779BC1] ${
                        activeId === term.id ? "text-[#779BC1] font-medium" : ""
                      }`}>
                      {term.title.replace(/^\d+\.\s/, "")}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main */}
          <section className="prose max-w-none">
            <div id="overview" className="mb-10">
              <h2 className="text-lg font-bold mb-3">Overview</h2>
              <p className="text-gray-600">
                Welcome to Klat-32, your all-in-one digital wallet and smart
                marketplace platform...
              </p>
              <p className="text-gray-600 mt-6">
                By downloading, accessing, or using the App, you agree...
              </p>
            </div>

            {terms.map((term) => (
              <div key={term.id} id={term.id} className="mb-10">
                <h2 className="text-lg font-bold mb-3">{term.title}</h2>
                {term.content.map((block, i) =>
                  typeof block === "string" ? (
                    <p key={i} className="text-gray-600 mb-4">
                      {block}
                    </p>
                  ) : (
                    <ul key={i} className="list-disc text-gray-600 mb-6 pl-6">
                      {block.list.map((item: string, j: number) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )
                )}
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

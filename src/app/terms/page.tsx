import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import terms from "./content.json";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Klat-32 Terms and Conditions page",
};

export default function Terms() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold text-center">Terms and Conditions</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-10 max-w-6xl mx-auto w-full">
        {/* Sidebar */}
        <aside className="hidden lg:block sticky top-24 self-start">
          <nav className="space-y-4 text-sm text-gray-700">
            <a href="#overview" className="font-bold">
              Overview
            </a>
            <ul className="space-y-2 mt-3">
              {terms.map((term) => (
                <li key={term.id}>
                  <a href={`#${term.id}`} className="hover:text-primary">
                    {term.title.replace(/^\d+\.\s/, "")}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <section className="prose max-w-none">
          <div id="overview" className="mb-10">
            <h2 className="text-lg font-bold mb-3">Overview</h2>
            <p className="text-gray-600">
              Welcome to Klat-32, your all-in-one digital wallet and smart
              marketplace platform that allows users to chat, send and receive
              money, pay merchants, and manage products or services all in one
              secure application. These Terms and Conditions ("Terms") govern
              your use of Klat-32 services, features, and functionalities
              provided through our mobile application ("App").
            </p>
            <p className="text-gray-600 mt-6">
              By downloading, accessing, or using the App, you agree to be bound
              by these Terms. If you do not agree to all of these Terms, do not
              use the App.
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
  );
}

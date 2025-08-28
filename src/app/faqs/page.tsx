"use client";

import { useState } from "react";
import faqs from "./questions.json";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg p-4 mb-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setOpen(!open)}>
        <span className="font-medium text-gray-800">{question}</span>
        <span className="text-xl font-bold text-gray-600 cursor-pointer hover:text-red-500">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="mt-2 text-gray-600 text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

interface FAQSectionProps {
  category: string;
  description: string;
  items: { question: string; answer: string }[];
  color?: "orange" | "blue";
}

function FAQSection({
  category,
  description,
  items,
  color = "orange",
}: FAQSectionProps) {
  const colorClasses =
    color === "blue"
      ? "bg-blue-100 text-blue-600"
      : "bg-orange-100 text-orange-600";

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-12">
      <div>
        <span
          className={`inline-block ${colorClasses} text-xs px-3 py-1 rounded-full mb-4`}>
          {category}
        </span>
        <h2 className="text-4xl font-semibold mb-2">
          Frequently asked <br/> question
        </h2>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="bg-white rounded-lg p-6">
        {items.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}


export default function FAQs() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">FAQs</h1>

      {faqs.map((section, index) => (
        <FAQSection
          key={index}
          category={section.category}
          description={section.description}
          items={section.items}
          color={section.color === "blue" ? "blue" : "orange"}
        />
      ))}
    </main>
  );
}

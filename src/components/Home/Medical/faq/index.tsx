"use client";

import { useState } from "react";

const faqData = [
  {
    question: "What is this medical conference about?",
    answer:
      "This conference covers neuroscience, mental health, and cognitive wellness, sharing research, clinical insights, and innovative practices.",
  },
  {
    question: "Who should attend this conference?",
    answer:
      "Doctors, Neuroscience, psychologists, researchers, and wellness professionals will greatly benefit from attending these informative sessions.",
  },
  {
    question: "What topics will be covered today?",
    answer:
      "Topics include neuroscience, neurobiology, cognitive resilience, mental health trends, and practical clinical applications.",
  },
  {
    question: "What will attendees gain from this event?",
    answer:
      "Attendees gain practical tools, expert insights, evidence-based strategies, and knowledge that can be applied immediately.",
  },
  {
    question: "Are there networking opportunities?",
    answer:
      "Yes, the conference offers structured networking sessions, interactive discussions, and social events to connect with peers and experts.",
  },
  {
    question: "Is there a certificate of attendance?",
    answer:
      "Yes, all attendees will receive an official certificate of attendance for professional development and continuing education purposes.",
  },
  {
    question: "Do I get proof of attendance?",
    answer:
      "Yes, a digital certificate will be issued to confirm your participation in the medical conference.",
  },
  {
    question: "How can I register for the conference?",
    answer:
      "Registration can be completed online through the official conference website. Early registration is recommended to secure a spot.",
  },
];

export default function MedicalFAQSection() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const isOpen = (index: number) => openIndices.has(index);

  return (
    // Faq section start
    <section className="2xl:mx-10 mx-2 lg:mx-5 mt-8 py-20 rounded-2xl bg-[#1FC5B1] text-white">
      <div className="container">
        <h2
          className="font-chivo md:text-6xl leading-snug mb-12 text-center"
          data-sal="zoom-in"
          data-sal-duration="800"
          data-sal-delay="100"
        >
          Frequently Asked Questions
        </h2>
        {/* right side */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-6">
              {faqData.slice(0, 4).map((faq, index) => (
                <div
                  key={index}
                  className="border rounded-2xl md:p-4"
                  data-sal="slide-right"
                  data-sal-duration="800"
                  data-sal-delay="100"
                >
                  <button
                    className="accordion-header w-full flex items-center justify-between px-4 py-3 text-left cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="md:text-2xl font-semibold font-chivo">
                      {faq.question}
                    </span>
                    <span className="text-2xl shrink-0 bg-[#1C2359] text-white size-10 rounded-full inline-flex items-center justify-center font-medium transition-transform duration-300 ease-in-out">
                      {isOpen(index) ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`accordion-body transition-all duration-500 ease-in-out ${
                      isOpen(index)
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <div className="p-4 border-t text-gray-200 md:text-[20px] leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* left side */}
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-6">
              {faqData.slice(4).map((faq, index) => (
                <div
                  key={index + 4}
                  className="border rounded-2xl md:p-4"
                  data-sal="slide-left"
                  data-sal-duration="800"
                  data-sal-delay="100"
                >
                  <button
                    className="accordion-header w-full flex items-center justify-between px-4 py-3 text-left cursor-pointer"
                    onClick={() => toggleAccordion(index + 4)}
                  >
                    <span className="md:text-2xl font-semibold font-chivo">
                      {faq.question}
                    </span>
                    <span className="text-2xl shrink-0 bg-[#1C2359] text-white size-10 rounded-full inline-flex items-center justify-center font-medium transition-transform duration-300 ease-in-out">
                      {isOpen(index + 4) ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`accordion-body transition-all duration-500 ease-in-out ${
                      isOpen(index + 4)
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <div className="p-4 border-t text-gray-200 md:text-[20px] leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    // Faq section end
  );
}

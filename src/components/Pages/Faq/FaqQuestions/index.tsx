"use client";

import { useState, useRef } from "react";

const faqData = [
  {
    question: "What is this conference about?",
    answer:
      "This conference focuses on knowledge sharing, innovation, and professional development.It brings together experts from various industries.The sessions are designed to inspire and educate attendees.",
  },
  {
    question: "Who should attend this conference?",
    answer:
      "Professionals, students, entrepreneurs, and industry leaders can benefit.Anyone interested in learning and growth is welcome.The event is suitable for beginners and experienced professionals.",
  },
  {
    question: "What topics will be covered?",
    answer:
      "  Topics include leadership, innovation, and emerging trends.Sessions focus on practical skills and real-world insights.Content is curated to deliver maximum value.",
  },
  {
    question: " What can attendees expect from the sessions?",
    answer:
      "Sessions are led by experienced speakers and professionals.They combine expert knowledge with practical examples.Attendees can expect engaging and informative discussions.",
  },
  {
    question: "What are the benefits of attending?",
    answer:
      "Attendees gain valuable insights and practical knowledge.They learn strategies applicable to their careers.The conference supports professional and personal growth.",
  },
  {
    question: "Are there networking opportunities?",
    answer:
      " Yes, the conference includes structured networking sessions.Attendees can connect with peers and industry experts.It is a great opportunity to build lasting relationships.",
  },
  {
    question: "Why should you not miss this conference?",
    answer:
      " The conference offers learning, inspiration, and connections.It helps attendees stay informed and motivated.Missing it means missing valuable growth opportunities.",
  },
];

export default function MedicalFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const isOpen = (index: number) => openIndex === index;

  return (
    <section className="lg:py-30 py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-15">
          <p
            className="mb-2 font-medium uppercase tracking-[1px]"
            data-sal="zoom-in"
            data-sal-duration="800"
            data-sal-delay="100"
          >
            // FAQ
          </p>

          <h2
            className="font-bold md:text-5xl leading-snug"
            data-sal="zoom-in"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            Got Questions? We've Got Answers
          </h2>
        </div>

        <div
          className="bg-[#f4f4f4] dark:bg-[#1F1F1F] md:p-10 p-5 rounded-2xl"
          data-sal="slide-up"
          data-sal-duration="800"
          data-sal-delay="200"
        >
          <div className="space-y-5">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`accordion-item rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen(index)
                    ? "bg-[#f2c944] border-transparent"
                    : "border border-black/10 dark:border-white/10"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="accordion-header w-full flex items-center justify-between px-6 py-5 text-left group"
                >
                  <span
                    className={`md:text-2xl font-semibold transition-colors ${
                      isOpen(index)
                        ? "text-black"
                        : "text-gray-800 dark:text-gray-200"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`icon shrink-0 size-11 rounded-full text-2xl flex items-center justify-center font-medium transition-all duration-300 ${
                      isOpen(index)
                        ? "rotate-180 text-black"
                        : "text-gray-800 dark:text-gray-200"
                    } group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black`}
                  >
                    {isOpen(index) ? "−" : "+"}
                  </span>
                </button>
                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  style={{
                    maxHeight: isOpen(index)
                      ? `${contentRefs.current[index]?.scrollHeight}px`
                      : "0px",
                  }}
                  className="accordion-body overflow-hidden transition-all duration-500 ease-in-out"
                >
                  <div
                    className={`px-6 pb-6 md:text-[20px] leading-relaxed ${
                      isOpen(index)
                        ? "text-gray-700"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

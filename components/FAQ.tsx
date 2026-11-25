
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { Plus, Minus } from "lucide-react";
import { faqContentData } from "@/data";

const faqs = faqContentData.items;

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const handleToggle = (index: number) => {
    setActiveIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      aria-labelledby="faq-heading"
      id="faqs"
      className="relative overflow-hidden bg-white py-8 sm:py-12 lg:py-16 w-full"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#c4774b]/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10 xl:px-14">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12 xl:gap-14">

          {/* ==================================
              LEFT SIDE
          ================================== */}
          <div className="flex min-w-0 flex-col">

            {/* Eyebrow */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
              className="mb-5 flex items-center gap-4"
            >
              <span className="text-xs font-extrabold uppercase tracking-[0.32em] text-[#102947] sm:text-sm sm:tracking-[0.35em]">
                {faqContentData.badge}
              </span>

              <span className="h-[2px] w-14 rounded-full bg-[#c4774b] sm:w-[58px]" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              id="faq-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
              className="max-w-[520px] text-4xl font-extrabold leading-[1.14] tracking-[-0.035em] text-[#102947] sm:text-5xl lg:text-[46px] xl:text-[49px]"
            >
              {faqContentData.heading}{" "}
              <span className="block text-[#c4774b]">
                {faqContentData.highlight}
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
              className="mt-5 max-w-[440px] text-base leading-[1.8] text-[#62666d] sm:text-lg"
            >
              {faqContentData.description}
            </motion.p>

            {/* Image */}
            <motion.div
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mt-9 w-full max-w-[550px] lg:mt-8"
            >
              <div className="absolute -left-3 -top-3 z-0 h-24 w-28 rounded-tl-[35px] border-l-[17px] border-t-[17px] border-[#c4774b] sm:-left-4 sm:-top-4 sm:h-28 sm:w-36 sm:border-l-[21px] sm:border-t-[21px]" />

              <div className="absolute -bottom-3 -right-3 z-0 h-24 w-28 rounded-br-[35px] border-b-[17px] border-r-[17px] border-[#c4774b] sm:-bottom-4 sm:-right-4 sm:h-28 sm:w-36 sm:border-b-[21px] sm:border-r-[21px]" />

              <div className="group relative z-10 overflow-hidden rounded-[24px] border-[5px] border-white shadow-[0_15px_40px_rgba(16,41,71,0.10)] sm:rounded-[30px]">
                <div className="relative aspect-[1.3/1] w-full overflow-hidden">
                  <Image
                    src={faqContentData.image.src}
                    alt={faqContentData.image.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102947]/10 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* ==================================
              RIGHT SIDE - FAQ ACCORDION
          ================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex min-w-0 flex-col gap-3.5 sm:gap-4"
          >
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : index * 0.09,
                  }}
                  className={`overflow-hidden rounded-[15px] border transition-colors duration-300 ${
                    isOpen
                      ? "border-[#c4774b]/20 bg-[#f9f5f2]"
                      : "border-[#dedee2] bg-white hover:border-[#c4774b]/50"
                  }`}
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className={`flex min-h-[65px] w-full items-center justify-between gap-5 px-5 py-4 text-left transition-all duration-300 sm:min-h-[68px] sm:px-6 sm:py-5 ${
                      isOpen
                        ? "bg-[#b9663e] text-white"
                        : "text-[#102947] hover:text-[#b9663e]"
                    }`}
                  >
                    <span className="text-base font-bold leading-snug sm:text-lg xl:text-xl">
                      {faq.question}
                    </span>

                    {/* Animated plus / minus */}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center">
                      <motion.span
                        animate={{
                          rotate: isOpen ? 180 : 0,
                          scale: isOpen ? 1.05 : 1,
                        }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.3,
                        }}
                      >
                        {isOpen ? (
                          <Minus
                            size={24}
                            strokeWidth={2.3}
                          />
                        ) : (
                          <Plus
                            size={24}
                            strokeWidth={2.2}
                          />
                        )}
                      </motion.span>
                    </span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        key="answer"
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          height: {
                            duration: reduceMotion ? 0 : 0.4,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: {
                            duration: reduceMotion ? 0 : 0.25,
                          },
                        }}
                      >
                        <div className="px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                          <p className="text-sm leading-[1.85] text-[#62666d] sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}


"use client";

import { useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";
import { testimonialsSectionContentData } from "@/data";

const testimonials = testimonialsSectionContentData.items
  .filter((item) => item.name)
  .map((item) => ({
    name: item.name,
    position: item.position,
    message: item.message,
    rating: item.rating,
  }));

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const activeTestimonial = testimonials[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const slideVariants = {
    initial: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 45,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -35,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-white py-8 sm:py-12 lg:py-16"
    >
      {/* SUBTLE BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[350px] w-[350px] rounded-full bg-[#c8794b]/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10 xl:px-14">

        {/* ================= SECTION HEADER ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 text-center sm:mb-12 lg:mb-14"
        >
          {/* EYEBROW */}
          <div className="mb-4 flex items-center justify-center gap-5">
            <span className="h-[2px] w-[42px] rounded-full bg-[#c36b39]" />

            <span className="text-[13px] font-bold uppercase tracking-[4px] text-[#172638] sm:text-[15px]">
              {testimonialsSectionContentData.eyebrow}
            </span>

            <span className="h-[2px] w-[42px] rounded-full bg-[#c36b39]" />
          </div>

          {/* HEADING */}
          <h2 className="text-[32px] font-bold leading-tight tracking-[-1px] text-[#142333] sm:text-[42px] md:text-[46px] lg:text-[48px]">
            {testimonialsSectionContentData.heading}{" "}
            <span className="bg-gradient-to-r from-[#b96840] to-[#d48b60] bg-clip-text text-transparent">
              {testimonialsSectionContentData.highlight}
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-3 max-w-[850px] text-[14px] leading-[1.8] text-[#555b63] sm:text-[16px] md:text-[17px]">
            {testimonialsSectionContentData.description}
          </p>
        </motion.div>

        {/* ================= TESTIMONIAL CONTENT ================= */}
        <div className="relative mx-auto max-w-[1260px]">

          {/* IMAGE DECORATIVE CORNER */}
          <motion.div
            initial={{
              opacity: 0,
              x: -35,
              y: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute -left-3 -top-3 z-0 h-[105px] w-[150px] rounded-tl-[30px] border-l-[12px] border-t-[12px] border-[#c8794b] sm:-left-3 sm:-top-3 sm:h-[115px] sm:w-[160px]"
          />

          {/* MAIN LAYOUT */}
          <div className="relative z-10 grid grid-cols-1 items-center lg:grid-cols-[1.3fr_0.9fr]">

            {/* ================= LEFT IMAGE ================= */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : {
                      opacity: 0,
                      x: -70,
                      rotateY: 12,
                    }
              }
              whileInView={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : {
                      opacity: 1,
                      x: 0,
                      rotateY: 0,
                    }
              }
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 1.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative aspect-[1.48/1] w-full overflow-hidden rounded-[25px] bg-[#e9edf0] shadow-[0_12px_35px_rgba(16,28,41,0.12)] lg:aspect-[1.55/1] lg:rounded-[30px]"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src={testimonialsSectionContentData.sectionImage.src}
                alt={testimonialsSectionContentData.sectionImage.alt}
                fill
                priority={false}
                sizes="(max-width: 1024px) 95vw, 65vw"
                className="object-cover object-center"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101c29]/20 via-transparent to-transparent" />

              {/* IMAGE SHINE ANIMATION */}
              <motion.div
                initial={{ x: "-150%" }}
                whileInView={{ x: "250%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.4,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            </motion.div>

            {/* ================= TESTIMONIAL CARD ================= */}
            <motion.div
              initial={{
                opacity: 0,
                x: shouldReduceMotion ? 0 : 70,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-20 -mt-8 ml-3 mr-3 rounded-[22px] border border-[#f0eeee] bg-white px-6 pb-7 pt-9 shadow-[0_12px_40px_rgba(16,28,41,0.10)] sm:mx-8 sm:px-8 sm:pb-8 lg:-ml-28 lg:mr-0 lg:mt-0 lg:min-h-[325px] lg:px-9 lg:pb-8 lg:pt-7 xl:-ml-32 xl:px-10"
            >

              {/* DECORATIVE QUOTE ICON */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  rotate: -20,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.7,
                  ease: "backOut",
                }}
                className="absolute -right-1 -top-8 text-[#c8794b] sm:right-11 sm:-top-9"
              >
                <Quote
                  size={65}
                  strokeWidth={0}
                  fill="currentColor"
                  className="rotate-180"
                />
              </motion.div>

              {/* TESTIMONIAL CONTENT SLIDER */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {/* CLIENT NAME */}
                  <h3 className="text-[22px] font-bold text-[#142333] sm:text-[25px]">
                    {activeTestimonial.name}
                  </h3>

                  {/* CLIENT POSITION */}
                  <p className="mt-1 text-[15px] font-medium text-[#81858c] sm:text-[16px]">
                    {activeTestimonial.position}
                  </p>

                  {/* CLIENT MESSAGE */}
                  <p className="mt-5 text-[15px] leading-[1.65] text-[#424750] sm:text-[16px] sm:leading-[1.7]">
                    {activeTestimonial.message}
                  </p>

                  {/* STAR RATING */}
                  <div
                    className="mt-5 flex items-center gap-1"
                    aria-label={testimonialsSectionContentData.starLabelTemplate.replace("{rating}", String(activeTestimonial.rating))}
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={22}
                        strokeWidth={1.5}
                        fill={
                          index < activeTestimonial.rating
                            ? "#c8794b"
                            : "#d8dadd"
                        }
                        className={
                          index < activeTestimonial.rating
                            ? "text-[#c8794b]"
                            : "text-[#d8dadd]"
                        }
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* ================= SLIDER CONTROLS ================= */}
              <div className="mt-6 flex items-center gap-3">

                {/* PREVIOUS */}
                <button
                  type="button"
                  onClick={prevTestimonial}
                  aria-label={testimonialsSectionContentData.previousLabel}
                  className="group flex h-[43px] w-[43px] items-center justify-center rounded-full border border-[#d7d9dd] bg-[#f8f9fa] text-[#263447] transition-all duration-300 hover:border-[#bd693b] hover:bg-[#bd693b] hover:text-white hover:shadow-[0_5px_15px_rgba(189,105,59,0.25)]"
                >
                  <ChevronLeft
                    size={22}
                    className="transition-transform duration-300 group-hover:-translate-x-0.5"
                  />
                </button>

                {/* NEXT */}
                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label={testimonialsSectionContentData.nextLabel}
                  className="group flex h-[43px] w-[43px] items-center justify-center rounded-full border border-[#d7d9dd] bg-[#f8f9fa] text-[#263447] transition-all duration-300 hover:border-[#bd693b] hover:bg-[#bd693b] hover:text-white hover:shadow-[0_5px_15px_rgba(189,105,59,0.25)]"
                >
                  <ChevronRight
                    size={22}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </button>

              </div>

            </motion.div>
          </div>
        </div>

        {/* BOTTOM DOT INDICATORS */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={testimonialsSectionContentData.paginationLabelTemplate.replace("{number}", String(index + 1))}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-[10px] rounded-full transition-all duration-500 ${
                activeIndex === index
                  ? "w-[27px] bg-[#bd693b]"
                  : "w-[10px] bg-[#e6d7cf] hover:bg-[#d4a98e]"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

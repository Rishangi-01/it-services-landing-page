
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { aboutContentData } from "@/data";

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="about-us"
      className="relative w-full overflow-hidden bg-white py-8 sm:py-12 lg:py-16"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-12 lg:px-8 xl:gap-14 px-5 sm:px-8 lg:px-10 xl:px-14">

        {/* ================= LEFT IMAGE ================= */}
        <div className="relative mx-auto w-full max-w-[650px] lg:mx-0">

          {/* TOP LEFT ORANGE DECORATION */}
          <motion.div
            initial={{ opacity: 0, x: -35, y: -25 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="absolute -left-3 -top-3 z-0 h-[145px] w-[145px] rounded-tl-[30px] border-l-[12px] border-t-[12px] border-[#c8794b] sm:-left-4 sm:-top-3 sm:h-[160px] sm:w-[160px]"
          />

          {/* BOTTOM RIGHT ORANGE DECORATION */}
          <motion.div
            initial={{ opacity: 0, x: 35, y: 25 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -bottom-3 -right-3 z-0 h-[115px] w-[145px] rounded-br-[30px] border-b-[12px] border-r-[12px] border-[#e9b99d] sm:-bottom-3 sm:-right-3 sm:h-[135px] sm:w-[160px]"
          />

          {/* 3D BOOK PAGE IMAGE */}
          <div
            className="relative z-10 mx-2 overflow-visible"
            style={{ perspective: "1600px" }}
          >
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : {
                      opacity: 0,
                      rotateY: -82,
                      scale: 0.96,
                    }
              }
              whileInView={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : {
                      opacity: 1,
                      rotateY: 0,
                      scale: 1,
                    }
              }
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                opacity: { duration: 0.5 },
                rotateY: {
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1],
                },
                scale: {
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              className="relative aspect-[1.22/1] w-full overflow-hidden rounded-[15px] bg-[#e8edf0] shadow-[0_15px_40px_rgba(16,28,41,0.13)]"
              style={{
                transformOrigin: "left center",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                willChange: "transform",
              }}
            >
              <Image
                src={aboutContentData.images.team.src}
                alt={aboutContentData.images.team.alt}
                fill
                priority={false}
                sizes="(max-width: 1024px) 95vw, 48vw"
                className="object-cover object-center"
              />

              {/* BOOK PAGE LIGHT / SHADOW EFFECT */}
              <motion.div
                initial={{ opacity: 0.8 }}
                whileInView={{ opacity: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/25 via-white/10 to-transparent"
              />

              {/* IMAGE SHINE */}
              <motion.div
                initial={{ x: "-120%" }}
                whileInView={{ x: "250%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            </motion.div>
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="relative z-10 flex flex-col">

          {/* SECTION LABEL */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-6 flex items-center gap-5"
          >
            <span className="text-[13px] font-bold uppercase tracking-[4px] text-[#172638] sm:text-[15px]">
              {aboutContentData.badge}
            </span>

            <span className="h-[3px] w-[46px] rounded-full bg-[#c36b39]" />
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.12 }}
            className="text-[32px] font-bold leading-[1.2] tracking-[-1px] text-[#142333] sm:text-[39px] md:text-[43px] lg:text-[38px] xl:text-[43px] 2xl:text-[46px]"
          >
            {aboutContentData.heading}{" "}
            <span className="bg-gradient-to-r from-[#b96b43] to-[#d18a61] bg-clip-text text-transparent">
              {aboutContentData.highlight}
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.25 }}
            className="mt-5 text-[15px] leading-[1.85] text-[#555b63] sm:text-[16px] lg:text-[16px] xl:text-[17px]"
          >
            {aboutContentData.description}
          </motion.p>

          {/* FEATURE LIST */}
          <div className="mt-8 flex flex-col gap-4 sm:gap-[18px]">
            {aboutContentData.services.map((feature, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: shouldReduceMotion ? 0 : 35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: 0.35 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex items-center gap-4"
              >
                {/* CHECK ICON */}
                <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#d28a5d] to-[#b75d2d] text-white shadow-[0_4px_10px_rgba(189,100,45,0.18)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                  <Check size={19} strokeWidth={3} />
                </span>

                {/* FEATURE TEXT */}
                <p className="text-[15px] font-medium leading-relaxed text-[#252a31] sm:text-[17px] lg:text-[16px] xl:text-[17px]">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

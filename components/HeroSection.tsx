
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { heroContentData } from "@/data";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[570px] h-[calc(100svh-86px)] max-h-[850px] w-full items-center overflow-hidden bg-[#111e2b]"
    >
      
      <Image
        src={heroContentData.backgroundImage}
        alt={heroContentData.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center] sm:object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#101c29] via-[lab(10 -1.91 -10.63 / 0.38)]/95 via-[35%] to-[lab(10 -1.91 -10.63 / 0)]/10" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-10 xl:px-14">
        <div className="max-w-[590px]">

          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.15 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-[25px] w-[4px] rounded-full bg-[#d77c3f]" />

            <span className="text-[12px] font-semibold uppercase tracking-[3px] text-white/90 sm:text-[14px] sm:tracking-[4px]">
              {heroContentData.badge[0]}
            </span>
          </motion.div>

          
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="text-[36px] font-bold leading-[1.17] tracking-[-1.2px] text-white sm:text-[44px] md:text-[50px] lg:text-[48px] xl:text-[52px] 2xl:text-[58px]"
          >
            {heroContentData.heading}
            <br />

            {heroContentData.accent ? `${heroContentData.accent} ` : "for "}
            <span className="bg-gradient-to-r from-[#c77a47] via-[#e89a61] to-[#d77c3f] bg-clip-text text-transparent">
              {heroContentData.highlight}
            </span>
          </motion.h1>

          
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.5 }}
            className="mt-5 max-w-[550px] text-[15px] font-normal leading-[1.8] text-white/85 sm:text-[17px] md:text-[18px]"
          >
            {heroContentData.descriptionLines.join(" ")}
          </motion.p>

          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 75 }}
            transition={{
              delay: 0.8,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="mt-8 h-[5px] rounded-full bg-gradient-to-r from-[#bd6935] to-[#ef9a5b]"
          />
        </div>
      </div>

      
      <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-[#101c29]/25 to-transparent" />
    </section>
  );
}

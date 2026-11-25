
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  Users,
  Lightbulb,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import { whyChooseUsContentData } from "@/data";

const iconMap = {
  Users,
  Lightbulb,
  ShieldCheck,
  Handshake,
};

const features = whyChooseUsContentData.features;

export default function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 35,
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

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.15,
      },
    },
  };

  return (
    <section
      aria-labelledby="why-choose-heading"
      id="why-choose-us"
      className="relative overflow-hidden bg-white py-8 sm:py-12 lg:py-16"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#c97545]/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10 xl:px-14">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10 xl:gap-14">

         
          <div className="min-w-0">

            {/* Eyebrow */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="mb-6 flex items-center gap-4"
            >
              <span className="text-xs font-extrabold uppercase tracking-[0.32em] text-[#142c49] sm:text-sm sm:tracking-[0.35em]">
                {whyChooseUsContentData.badge}
              </span>

              <span className="h-[2px] w-14 rounded-full bg-[#c87547] sm:w-[75px]" />
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              id="why-choose-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="max-w-[750px] text-[36px] font-extrabold leading-[1.15] tracking-[-0.04em] text-[#102947] sm:text-5xl lg:text-[48px] xl:text-[54px] 2xl:text-[60px]"
            >
              {whyChooseUsContentData.heading}{" "}
              <span className="text-[#c4774b]">
                {whyChooseUsContentData.highlight}
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="mt-5 max-w-[700px] text-base leading-[1.8] text-[#62666d] sm:text-lg"
            >
              {whyChooseUsContentData.description}
            </motion.p>

            {/* Feature Grid */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2"
            >
              {features.map((feature, index) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap] ?? Users;

                return (
                  <motion.div
                    key={feature.title}
                    variants={fadeUp}
                    className={`
                      group flex items-start gap-4 py-6
                      sm:gap-5 sm:px-5
                      ${index % 2 === 0 ? "sm:pl-0" : "sm:border-l-2 sm:border-[#e3e4e7]"}
                      ${index < 2 ? "sm:border-b-2 sm:border-[#e3e4e7]" : ""}
                      ${index % 2 === 0 ? "sm:pr-5" : "sm:pr-0"}
                    `}
                  >
                    {/* Icon */}
                    <div className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-[20px] bg-[#fbf2ed] text-[#c4774b] transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-[#c4774b] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#c4774b]/20 sm:h-[76px] sm:w-[76px]">
                      <Icon
                        size={40}
                        strokeWidth={1.7}
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Feature Text */}
                    <div className="min-w-0 pt-0.5">
                      <h3 className="text-lg font-extrabold leading-snug tracking-tight text-[#102947] sm:text-[18px]">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-sm leading-[1.65] text-[#62666d] sm:text-[15px]">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* ===================================
              RIGHT IMAGE
          =================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 55,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[650px] lg:ml-auto lg:mr-0"
          >
            {/* Top-left decorative corner */}
            <motion.div
              initial={{
                opacity: 0,
                scale: reduceMotion ? 1 : 0.7,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: 0.3,
              }}
              className="absolute -left-3 -top-3 z-0 h-24 w-28 rounded-tl-[38px] border-l-[18px] border-t-[18px] border-[#c4774b] sm:-left-5 sm:-top-5 sm:h-32 sm:w-36 sm:border-l-[22px] sm:border-t-[22px]"
            />

            {/* Bottom-right decorative corner */}
            <motion.div
              initial={{
                opacity: 0,
                scale: reduceMotion ? 1 : 0.7,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: 0.45,
              }}
              className="absolute -bottom-3 -right-3 z-0 h-24 w-28 rounded-br-[38px] border-b-[18px] border-r-[18px] border-[#c4774b] sm:-bottom-5 sm:-right-5 sm:h-32 sm:w-36 sm:border-b-[22px] sm:border-r-[22px]"
            />

            {/* Image Wrapper */}
            <div className="relative z-10 overflow-hidden rounded-[25px] border-[5px] border-white shadow-[0_15px_45px_rgba(16,41,71,0.10)] sm:rounded-[32px]">
              <div className="relative aspect-[1/1] w-full overflow-hidden">
                <Image
                  src={whyChooseUsContentData.image.src}
                  alt={whyChooseUsContentData.image.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-[1200ms] ease-out hover:scale-105"
                />

                {/* Subtle image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102947]/10 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

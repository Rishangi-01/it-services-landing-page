
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Cloud,
  ShieldCheck,
} from "lucide-react";
import {
  financialServicesContentData,
  solarServicesSectionData,
} from "@/data";

const iconMap = {
  Code2,
  Cloud,
  ShieldCheck,
};

const services = financialServicesContentData.items.slice(0, 3);

export default function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-white py-8 sm:py-12 lg:py-16"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10 xl:px-14">

        {/* ================= SECTION HEADER ================= */}
        <div className="mb-9 sm:mb-12">

          {/* EYEBROW */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center gap-4"
          >
            <span className="text-[13px] font-bold uppercase tracking-[4px] text-[#172638] sm:text-[15px]">
              {solarServicesSectionData.eyebrow}
            </span>

            <span className="h-[2px] w-[55px] rounded-full bg-[#c36b39]" />
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[34px] font-bold leading-[1.2] tracking-[-1px] text-[#142333] sm:text-[42px] md:text-[46px] lg:text-[44px] xl:text-[48px]"
          >
            {solarServicesSectionData.title}{" "}
            <span className="bg-gradient-to-r from-[#b96b43] to-[#d28a61] bg-clip-text text-transparent">
              {solarServicesSectionData.highlight}
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 max-w-[610px] text-[15px] leading-[1.8] text-[#555b63] sm:text-[17px]"
          >
            {solarServicesSectionData.text}
          </motion.p>
        </div>

        {/* ================= SERVICE CARDS ================= */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:gap-7">

          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? ShieldCheck;

            return (
              <motion.article
                key={service.number}
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 45,
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
                  duration: 0.75,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -9,
                        transition: { duration: 0.3 },
                      }
                }
                className="group relative overflow-visible rounded-[17px] bg-white shadow-[0_8px_24px_rgba(20,35,51,0.10)] transition-shadow duration-500 hover:shadow-[0_20px_45px_rgba(20,35,51,0.16)]"
              >

                {/* IMAGE AREA */}
                <div
                  className="relative overflow-hidden rounded-t-[17px]"
                  style={{ perspective: "1400px" }}
                >
                  {/* 3D BOOK OPENING IMAGE */}
                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : {
                            opacity: 0,
                            rotateY: -80,
                          }
                    }
                    whileInView={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : {
                            opacity: 1,
                            rotateY: 0,
                          }
                    }
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      opacity: { duration: 0.5 },
                      rotateY: {
                        duration: 1.4,
                        delay: 0.15 + index * 0.15,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }}
                    className="relative aspect-[1.55/1] w-full overflow-hidden bg-[#e8edf2]"
                    style={{
                      transformOrigin: "left center",
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                      willChange: "transform",
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* IMAGE OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101c29]/25 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* IMAGE SHINE */}
                    <motion.div
                      initial={{ x: "-120%" }}
                      whileInView={{ x: "250%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.1,
                        delay: 0.6 + index * 0.15,
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                  </motion.div>
                </div>

                {/* FLOATING ICON */}
                <div className="absolute left-6 top-[calc(57%_-_24px)] z-20 flex h-[58px] w-[58px] items-center justify-center rounded-[15px] border-2 border-white bg-gradient-to-br from-[#d58b5c] to-[#b75e32] text-white shadow-[0_5px_15px_rgba(183,94,50,0.25)] transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-3 group-hover:shadow-[0_10px_25px_rgba(183,94,50,0.35)] sm:left-6">
                  <Icon size={29} strokeWidth={1.8} />
                </div>

                {/* CARD CONTENT */}
                <div className="relative px-6 pb-7 pt-7 sm:px-7 sm:pb-8">

                  {/* SERVICE TITLE */}
                  <h3 className="text-[20px] font-bold tracking-[-0.4px] text-[#142333] transition-colors duration-300 group-hover:text-[#bd6935] sm:text-[22px]">
                    {service.title}
                  </h3>

                  {/* SERVICE DESCRIPTION */}
                  <p className="mt-2 text-[14px] leading-[1.8] text-[#555b63] sm:text-[15px]">
                    {service.description}
                  </p>

                  {/* BOTTOM DECORATIVE LINE */}
                  <div className="mt-5 h-[2px] w-0 rounded-full bg-gradient-to-r from-[#bd6935] to-[#e8a477] transition-all duration-500 group-hover:w-16" />

                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ================= PAGINATION DOTS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-3"
          aria-hidden="true"
        >
          <span className="h-[11px] w-[11px] rounded-full bg-[#bd6935]" />
          <span className="h-[11px] w-[11px] rounded-full bg-[#e6d6cd]" />
          <span className="h-[11px] w-[11px] rounded-full bg-[#e6d6cd]" />
        </motion.div>

      </div>
    </section>
  );
}

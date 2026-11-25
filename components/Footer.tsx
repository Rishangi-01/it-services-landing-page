
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import {
  footerContentData,
} from "@/data";

const iconMap = {
  location: MapPin,
  phone: Phone,
  email: Mail,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Footer() {
  const reduceMotion = useReducedMotion();

  const variants = reduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      }
    : itemVariants;

  return (
    <footer className="relative overflow-hidden bg-[#1c1f22] text-white">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-[#ef8b19]/[0.04] blur-[110px]" />

      <div className="relative mx-auto max-w-[1600px] pb-6 pt-14 sm:pt-16 lg:pt-[72px] px-5 sm:px-8 lg:px-10 xl:px-14">

        {/* Main Footer Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.45fr_1fr_0.95fr_1.15fr] lg:gap-0"
        >

          {/* ==================================
              BRAND COLUMN
          ================================== */}
          <motion.div
            variants={variants}
            className="flex flex-col lg:pr-9"
          >
            <Link
              href={footerContentData.brandLinkHref}
              aria-label={footerContentData.brandLinkLabel}
              className="group inline-flex w-fit items-center"
            >
              <Image
                src={footerContentData.excellenceImage.src}
                alt={footerContentData.excellenceImage.alt}
                width={360}
                height={100}
                priority
                className="h-auto w-[260px] object-contain transition-transform duration-500 group-hover:scale-[1.03] sm:w-[290px]"
              />
            </Link>

            <p className="mt-6 max-w-[370px] text-sm leading-[1.85] text-[#d1d2d4] sm:text-base">
              {footerContentData.description}
            </p>
          </motion.div>

          {/* ==================================
              QUICK LINKS
          ================================== */}
          <motion.div
            variants={variants}
            className="border-t border-white/20 pt-7 sm:border-t-0 sm:pt-0 lg:border-l lg:border-white/40 lg:pl-10"
          >
            <FooterHeading>{footerContentData.quickLinksHeading}</FooterHeading>

            <ul className="mt-5 space-y-3.5">
              {footerContentData.quickLinks.map((link) => (
                <FooterLink
                  key={link.name}
                  href={link.href}
                >
                  {link.name}
                </FooterLink>
              ))}
            </ul>
          </motion.div>

          {/* ==================================
              SUPPORT
          ================================== */}
          <motion.div
            variants={variants}
            className="border-t border-white/20 pt-7 sm:border-t-0 sm:pt-0 lg:border-l lg:border-white/40 lg:pl-10"
          >
            <FooterHeading>{footerContentData.teamLinksHeading}</FooterHeading>

            <ul className="mt-5 space-y-3.5">
              {footerContentData.teamLinks
                .filter((link) => link.name && link.href)
                .map((link) => (
                <FooterLink
                  key={link.name}
                  href={link.href}
                >
                  {link.name}
                </FooterLink>
              ))}
            </ul>
          </motion.div>

          {/* ==================================
              CONTACT INFO
          ================================== */}
          <motion.div
            variants={variants}
            className="border-t border-white/20 pt-7 sm:col-span-2 sm:pt-7 lg:col-span-1 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
          >
            <FooterHeading>{footerContentData.contactHeading}</FooterHeading>

            <div className="mt-5 space-y-4">

              {footerContentData.contactDetails.map((item, index) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap] ?? MapPin;

                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    target={
                      item.icon === "location" ? "_blank" : undefined
                    }
                    rel={
                      item.icon === "location" ? "noreferrer" : undefined
                    }
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { x: 5 }
                    }
                    className="group flex items-start gap-4 text-sm leading-[1.7] text-[#d1d2d4] transition-colors duration-300 hover:text-white sm:text-base"
                  >
                    <Icon
                      size={25}
                      strokeWidth={2.4}
                      className="mt-0.5 shrink-0 text-[#f28c18] transition-transform duration-300 group-hover:scale-110"
                    />

                    <span className="min-w-0">
                      {item.text}
                    </span>
                  </motion.a>
                );
              })}

            </div>
          </motion.div>

        </motion.div>

        {/* ==================================
            BOTTOM COPYRIGHT
        ================================== */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: reduceMotion ? 1 : 0.8,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            delay: 0.2,
          }}
          className="mt-12 origin-left border-t-2 border-[#f28c18] pt-5 sm:mt-14 sm:pt-6"
        >
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">

            <p className="text-sm text-[#dedfe0] sm:text-base">
              {footerContentData.copyright}
            </p>

          </div>
        </motion.div>

      </div>
    </footer>
  );
}

/* ==================================
   REUSABLE FOOTER HEADING
================================== */
function FooterHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-xl font-bold tracking-tight text-white sm:text-[22px]">
        {children}
      </h3>

      <div className="mt-3 h-[3px] w-14 rounded-full bg-[#f28c18] transition-all duration-500 hover:w-20" />
    </div>
  );
}

/* ==================================
   REUSABLE FOOTER LINK
================================== */
function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-3 text-sm text-[#d1d2d4] transition-colors duration-300 hover:text-[#f28c18] sm:text-base"
      >
        <ChevronRight
          size={17}
          strokeWidth={2.5}
          className={`shrink-0 text-[#f28c18] transition-transform duration-300 ${
            reduceMotion
              ? ""
              : "group-hover:translate-x-1"
          }`}
        />

        <span>{children}</span>
      </Link>
    </li>
  );
}

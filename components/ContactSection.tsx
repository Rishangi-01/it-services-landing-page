
"use client";

import { motion, useReducedMotion } from "framer-motion";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react";
import { contactSectionContentData } from "@/data";

const iconMap = {
  location: MapPin,
  phone: Phone,
  email: Mail,
  hours: Clock,
};

const contactDetails = contactSectionContentData.details;

export default function ContactSection() {
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
      id="contact"
      className="relative w-full overflow-hidden bg-white py-8 sm:py-12 lg:py-16"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-[#ed6a24]/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10 xl:px-14">

        {/* ================= SECTION HEADER ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-5 text-center sm:mb-12 lg:mb-14"
        >
          {/* EYEBROW */}
          <div className="mb-1 lg:mb-0 flex items-center justify-center gap-5">
            <span className="h-[2px] w-[44px] rounded-full bg-[#e65f1c]" />

            <span className="text-[13px] font-bold uppercase tracking-[4px] text-[#172638] sm:text-[15px]">
              {contactSectionContentData.eyebrow}
            </span>

            <span className="h-[2px] w-[44px] rounded-full bg-[#e65f1c]" />
          </div>

          {/* MAIN HEADING */}
          <h2 className="text-[42px] font-bold leading-tight tracking-[-1.5px] text-[#142333] sm:text-[54px] md:text-[60px] lg:text-[64px]">
            {contactSectionContentData.heading}{" "}
            <span className="bg-gradient-to-r from-[#d75d1f] to-[#f0803d] bg-clip-text text-transparent">
              {contactSectionContentData.highlight}
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-1 lg:mt-0 max-w-[850px] text-[14px] leading-[1.8] text-[#444b55] sm:text-[16px] md:text-[17px]">
            {contactSectionContentData.description}
          </p>
        </motion.div>

        {/* ================= MAIN CONTACT LAYOUT ================= */}
        <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-6 lg:grid-cols-[0.82fr_1.25fr] lg:gap-6 xl:gap-8">

          {/* LEFT DECORATIVE CORNER */}
          <motion.div
            initial={{ opacity: 0, x: -35, y: -25 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pointer-events-none absolute -left-3 -top-3 z-0 hidden h-[80px] w-[110px] rounded-tl-[25px] border-l-[18px] border-t-[18px] border-[#e86a2b] sm:block rounded-tr-[18px] rounded-bl-[18px]"
          />

          {/* ================= LEFT CONTACT DETAILS ================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : -45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 px-1 pt-4 sm:px-4 lg:pt-8"
          >
            <div className="flex flex-col">

              {contactDetails.map((item, index) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap] ?? MapPin;

                const content = (
                  <div className="group flex items-center gap-4 sm:gap-5">

                    {/* ICON BOX */}
                    <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[13px] bg-gradient-to-br from-[#fff0e6] to-[#ffebe0] text-[#e65f1c] transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-[#e9692a] group-hover:shadow-[0_8px_20px_rgba(230,95,28,0.2)] sm:h-[64px] sm:w-[64px]">
                      <Icon
                        size={31}
                        strokeWidth={1.8}
                        className="transition-transform duration-500 group-hover:rotate-[-8deg]"
                      />
                    </div>

                    {/* TEXT */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[19px] font-bold leading-tight text-[#142333] transition-colors duration-300 group-hover:text-[#d75d1f] sm:text-[21px]">
                        {item.title}
                      </h3>

                      <p className="mt-1 break-words text-[14px] leading-relaxed text-[#343b44] sm:text-[15px]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: shouldReduceMotion ? 0 : 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.13,
                    }}
                    className="py-4 first:pt-2 sm:py-[6px]"
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block rounded-xl outline-offset-4"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}

                    {/* SEPARATOR */}
                    {index !== contactDetails.length - 1 && (
                      <div className="mt-3 h-px w-full bg-gradient-to-r from-[#e8d9d0] to-transparent sm:mt-3" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ================= RIGHT FORM ================= */}
          <div className="relative z-10">

            {/* TOP RIGHT ORANGE DECORATION */}
            <motion.div
              initial={{ opacity: 0, x: 35, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="pointer-events-none absolute -right-3 -top-3 z-0 h-[115px] w-[145px] rounded-br-[40px] rounded-tl-[40px] rounded-tr-[28px] border-r-[30px] border-t-[30px] border-[#e9682a] sm:-right-6 sm:-top-6 sm:h-[145px] sm:w-[195px]"
            />

            {/* BOTTOM RIGHT NAVY DECORATION */}
            <motion.div
              initial={{ opacity: 0, x: 35, y: 25 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pointer-events-none absolute -bottom-3 -right-3 z-0 h-[115px] w-[145px] rounded-br-[40px] rounded-bl-[20px] rounded-tr-[33px] border-b-[30px] border-r-[30px] border-[#172b40] sm:-bottom-6 sm:-right-6 sm:h-[165px] sm:w-[245px]"
            />

            {/* FORM CARD */}
            <motion.div
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 45,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10 rounded-[22px] border border-[#f0eeee] bg-white px-5 py-7 shadow-[0_12px_35px_rgba(16,28,41,0.11)] sm:px-8 sm:py-9 md:px-10 lg:px-8 lg:py-8 xl:px-10 xl:py-9"
            >

              {/* FORM HEADING */}
              <h3 className="mb-6 text-[27px] font-bold leading-tight tracking-[-0.7px] text-[#142333] sm:text-[32px] md:text-[34px]">
                {contactSectionContentData.formHeading}{" "}
                <span className="bg-gradient-to-r from-[#d75d1f] to-[#f0803d] bg-clip-text text-transparent">
                  {contactSectionContentData.formHighlight}
                </span>
              </h3>

              {/* CONTACT FORM */}
              <form
                action={contactSectionContentData.formAction}
                method={contactSectionContentData.formMethod as "POST"}
                className="flex flex-col gap-[15px]"
              >

                {/* NAME + EMAIL */}
                <div className="grid grid-cols-1 gap-[15px] sm:grid-cols-2">

                  <div>
                    <label htmlFor="contact-name" className="sr-only">
                      {contactSectionContentData.fields.firstName.label}
                    </label>

                    <input
                      id="contact-name"
                      type={contactSectionContentData.fields.firstName.type}
                      name={contactSectionContentData.fields.firstName.name}
                      placeholder={contactSectionContentData.fields.firstName.placeholder}
                      autoComplete={contactSectionContentData.fields.firstName.autoComplete}
                      required
                      className="h-[37px] w-full rounded-[7px] border border-[#c6cbd1] bg-white px-4 text-[14px] text-[#263447] outline-none transition-all duration-300 placeholder:text-[#707783] hover:border-[#d18a5d] focus:border-[#d75d1f] focus:ring-[3px] focus:ring-[#d75d1f]/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="sr-only">
                      {contactSectionContentData.fields.email.label}
                    </label>

                    <input
                      id="contact-email"
                      type={contactSectionContentData.fields.email.type}
                      name={contactSectionContentData.fields.email.name}
                      placeholder={contactSectionContentData.fields.email.placeholder}
                      autoComplete={contactSectionContentData.fields.email.autoComplete}
                      required
                      className="h-[37px] w-full rounded-[7px] border border-[#c6cbd1] bg-white px-4 text-[14px] text-[#263447] outline-none transition-all duration-300 placeholder:text-[#707783] hover:border-[#d18a5d] focus:border-[#d75d1f] focus:ring-[3px] focus:ring-[#d75d1f]/10"
                    />
                  </div>
                </div>

                {/* SUBJECT */}
                <div>
                  <label htmlFor="contact-subject" className="sr-only">
                    {contactSectionContentData.fields.subject.label}
                  </label>

                  <input
                    id="contact-subject"
                    type={contactSectionContentData.fields.subject.type}
                    name={contactSectionContentData.fields.subject.name}
                    placeholder={contactSectionContentData.fields.subject.placeholder}
                    required
                    className="h-[37px] w-full rounded-[7px] border border-[#c6cbd1] bg-white px-4 text-[14px] text-[#263447] outline-none transition-all duration-300 placeholder:text-[#707783] hover:border-[#d18a5d] focus:border-[#d75d1f] focus:ring-[3px] focus:ring-[#d75d1f]/10"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    {contactSectionContentData.fields.message.label}
                  </label>

                  <textarea
                    id="contact-message"
                    name={contactSectionContentData.fields.message.name}
                    rows={contactSectionContentData.fields.message.rows}
                    placeholder={contactSectionContentData.fields.message.placeholder}
                    required
                    className="min-h-[105px] w-full resize-y rounded-[7px] border border-[#c6cbd1] bg-white px-4 py-3 text-[14px] text-[#263447] outline-none transition-all duration-300 placeholder:text-[#707783] hover:border-[#d18a5d] focus:border-[#d75d1f] focus:ring-[3px] focus:ring-[#d75d1f]/10 sm:min-h-[80px]"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-1">
                  <motion.button
                    type="submit"
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : { y: -3, scale: 1.02 }
                    }
                    whileTap={
                      shouldReduceMotion
                        ? undefined
                        : { scale: 0.97 }
                    }
                    className="group inline-flex min-h-[47px] w-full items-center justify-center gap-4 rounded-[8px] bg-gradient-to-r from-[#e96625] to-[#d95116] px-7 py-3 text-[16px] font-bold text-white shadow-[0_5px_15px_rgba(217,81,22,0.17)] transition-all duration-300 hover:shadow-[0_9px_22px_rgba(217,81,22,0.28)] sm:w-auto sm:min-w-[225px] sm:text-[17px]"
                  >
                    <span>{contactSectionContentData.submitLabel}</span>

                    <ArrowRight
                      size={21}
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
